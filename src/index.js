import './style.css';
import './images/icon.png';
import './images/day-and-night1.png';

import Calculator from './modules/Calculator';
import HTMLDrawer from './modules/HTMLDrawer';
import StateManager from './modules/StateManager';

import OperationFactory from './modules/OperationFactory';

import ClearAllCalcOperands from './modules/instruments/ClearAllCalcOperands';
import ClearRightCalcOperand from './modules/instruments/ClearRightCalcOperand';
import UpdateScreen from './modules/instruments/UpdateScreen';
import UpdateCurrentOperand from './modules/instruments/UpdateCurrentOperand';

class CalculatorApp {
  drawer;
  calculator;
  snapshotState;

  constructor(drawer, calculator) {
    this.drawer = drawer;
    this.calculator = calculator;
    this.snapshotState = new StateManager();
  }

  start() {
    this.drawer.renderLayout();

    for (let prop in Calculator.memoryOperations) {
      this.drawer.appendMemoryButton(prop, Calculator.memoryOperations[prop]);
    }

    ['.', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach(num => {
      this.drawer.appendNumButton(num, 'data-num');
    });

    for (let prop in Calculator.modifyOperations) {
      this.drawer.appendOperationButton(
        prop,
        Calculator.modifyOperations[prop],
        'data-modify-operation',
      );
    }

    for (let prop in Calculator.calculateOperations) {
      this.drawer.appendOperationButton(
        prop,
        Calculator.calculateOperations[prop],
        'data-calculate-operation',
      );
    }

    this.drawer.appendOperationButton('=', '', 'data-equal');
    this.drawer.appendOperationButton('CE', '', 'data-clear-entry');
    this.drawer.appendOperationButton('C', ' ', 'data-clear-all');
    this.drawer.appendOperationButton('undo', '', 'data-undo');
    this.drawer.appendOperationButton('%', '', 'data-percent');
    this.drawer.appendOperationButton('±', '', 'data-plus-minus');

    //this.drawer.calculatorWrapper.classList.add('btns-grid');

    this.drawer.memoryButtonsWrapper.addEventListener('click', event => {
      if (Number.isNaN(Number(this.drawer.recordInput.textContent))) return;

      if (event.target.getAttribute('data-type') === 'data-memory-clear') {
        this.calculator.memory.clear();
        this.drawer.memoryInput.textContent = '';
      }
      if (event.target.getAttribute('data-type') === 'data-memory-add') {
        this.calculator.memory.add(this.drawer.recordInput.textContent);
        this.drawer.memoryInput.textContent = 'M';
      }
      if (event.target.getAttribute('data-type') === 'data-memory-substr') {
        this.calculator.memory.substr(this.drawer.recordInput.textContent);
        this.memoryInput.textContent = 'M';
      }
      if (event.target.getAttribute('data-type') === 'data-memory-recall') {
        this.calculator.currentNum = this.calculator.memory.recall();
        new UpdateScreen(this.calculator).execute();
      }
    });

    this.drawer.allButtonsWrapper.addEventListener('click', event => {
      if (event.target.getAttribute('data-type') === 'data-num') {
        // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
        if (
          (this.calculator.prevNum !== '' &&
            this.calculator.operation.id === '') ||
          this.calculator.operation.type === 'single'
        ) {
          new ClearAllCalcOperands(this.calculator).execute();
          new UpdateScreen(this.calculator).execute();
        }

        new UpdateCurrentOperand(this.drawer.recordInput).execute(
          event.target.textContent,
        );
      }

      // single-operator operations==============================
      if (event.target.getAttribute('data-type') === 'data-modify-operation') {
        if (Number.isNaN(Number(this.drawer.recordInput.textContent))) return;

        this.calculator.operation.id = event.target.id;
        this.calculator.operation.sign = event.target.getAttribute('data-sign');
        this.calculator.operation.type = 'single';

        const OperationToExecute = new OperationFactory(
          this.calculator.operation.id,
          this.calculator.operation.sign,
          this.calculator.operation.type,
        ).create([
          this.drawer.recordInput.textContent,
          this.drawer.recordInput.textContent,
        ]);

        if (this.calculator.executeCommand(OperationToExecute)) {
          this.snapshotState.addOperation(OperationToExecute);

          this.drawer.showModificationResult(this.calculator.prevNum);
          //new UpdateScreen(this.calculator).execute();
        } else {
          this.drawer.recordInput.textContent = 'invalid operation';
          new ClearAllCalcOperands(this.calculator).execute();
        }
      }
      // pair-operator operations==================================
      if (
        event.target.getAttribute('data-type') === 'data-calculate-operation'
      ) {
        if (Number.isNaN(Number(this.drawer.recordInput.textContent))) return;
        // if there's operation to execute
        if (this.calculator.operation.id !== '') {
          const OperationToExecute = new OperationFactory(
            this.calculator.operation.id,
            this.calculator.operation.sign,
            this.calculator.operation.type,
          ).create([
            this.calculator.prevNum,
            this.drawer.recordInput.textContent,
          ]);

          this.calculator.executeCommand(OperationToExecute);
          this.snapshotState.addOperation(OperationToExecute);

          this.calculator.operation.id = event.target.id;
          this.calculator.operation.sign =
            event.target.getAttribute('data-sign');
          this.calculator.operation.type = 'pair';

          this.drawer.showCalculationResult(
            this.calculator.prevNum,
            this.calculator.operation.sign,
          );

          return;
        }

        // if there's NO operation to execute
        this.calculator.prevNum = this.drawer.recordInput.textContent;
        this.calculator.operation.id = event.target.id;
        this.calculator.operation.sign = event.target.getAttribute('data-sign');
        this.calculator.operation.type = 'pair';

        new UpdateScreen(this.calculator).execute();
      }

      if (event.target.getAttribute('data-type') === 'data-equal') {
        if (Number.isNaN(Number(this.drawer.recordInput.textContent))) return;
        if (this.calculator.operation.id === '') return; // '5=' =>5 а не error

        const OperationToExecute = new OperationFactory(
          this.calculator.operation.id,
          this.calculator.operation.sign,
          this.calculator.operation.type,
        ).create([
          this.calculator.prevNum,
          this.drawer.recordInput.textContent,
        ]);

        if (this.calculator.executeCommand(OperationToExecute)) {
          this.snapshotState.addOperation(OperationToExecute);

          this.drawer.showModificationResult(this.calculator.prevNum);
          // new UpdateScreen(this.calculator).execute();
        } else {
          this.drawer.recordInput.textContent = 'invalid operation';
          new ClearAllCalcOperands(calculator).execute();
        }
      }

      // rest specific non-automated operations====================
      if (event.target.getAttribute('data-type') === 'data-percent') {
        if (Number.isNaN(this.drawer.recordInput.textContent)) return;
        this.calculator.currentNum =
          this.calculator.prevNum * (this.drawer.recordInput.textContent / 100);

        this.drawer.recordInput.textContent = this.calculator.currentNum;
        //new UpdateScreen(calculator).execute();
      }

      if (event.target.getAttribute('data-type') === 'data-plus-minus') {
        if (Number.isNaN(this.drawer.recordInput.textContent)) return;

        this.drawer.recordInput.textContent = -Number(
          this.drawer.recordInput.textContent,
        );
      }

      if (event.target.getAttribute('data-type') === 'data-clear-all') {
        new ClearAllCalcOperands(this.calculator).execute();
        this.drawer.updateScreen('', '0');

        //new UpdateScreen(this.calculator).execute();
      }

      if (event.target.getAttribute('data-type') === 'data-clear-entry') {
        new ClearRightCalcOperand(this.calculator).execute(); //??????

        this.drawer.recordInput.textContent = '0';

        //new UpdateScreen(calculator).execute();
      }

      if (event.target.getAttribute('data-type') === 'data-undo') {
        const CommandToUndo = this.snapshotState.getOperation();
        this.calculator.forceState(CommandToUndo);
        new ClearRightCalcOperand(this.calculator).execute();
        new UpdateScreen(this.calculator).execute();
      }
    });

    this.drawer.changeTheme();
  }
}

new CalculatorApp(new HTMLDrawer('root'), new Calculator()).start();
