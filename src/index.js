import './style.css';
import './images/icon.png';
import './images/day-and-night1.png';

import Calculator from './modules/Calculator';
import OperationFactory from './modules/OperationFactory';
import StateManager from './modules/StateManager';

import changeTheme from './modules/changeTheme';

import ClearAllCalcOperands from './modules/instruments/ClearAllCalcOperands';
import ClearLeftCalcOperand from './modules/instruments/ClearLeftCalcOperand';
import UpdateScreen from './modules/instruments/UpdateScreen';
import UpdateCurrentOperand from './modules/instruments/UpdateCurrentOperand';

const calculator = new Calculator();
const OperationsState = new StateManager();
const memoryBtnsBlock = document.querySelector('.m-btns');
const recordBlock = document.querySelector('.record-data-block');
const btnsBlock = document.querySelector('.btns');

changeTheme();

memoryBtnsBlock.addEventListener('click', event => {
  const memoryAlarmBlock = document.querySelector('.mem-data-block');

  if (Number.isNaN(Number(recordBlock.textContent))) return;

  if (event.target.hasAttribute('data-memory-clear')) {
    calculator.memory.clear();
    memoryAlarmBlock.textContent = '';
  }
  if (event.target.hasAttribute('data-memory-add')) {
    calculator.memory.add(recordBlock.textContent);
    memoryAlarmBlock.textContent = 'M';
  }
  if (event.target.hasAttribute('data-memory-substr')) {
    calculator.memory.substr(recordBlock.textContent);
    memoryAlarmBlock.textContent = 'M';
  }
  if (event.target.hasAttribute('data-memory-recall')) {
    calculator.currentNum = calculator.memory.recall();
    new UpdateScreen(calculator).execute();
  }
});

btnsBlock.addEventListener('click', event => {
  if (event.target.hasAttribute('data-num')) {
    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (
      (calculator.prevNum !== '' && calculator.operation.id === '') ||
      calculator.operation.type === 'single'
    ) {
      new ClearAllCalcOperands(calculator).execute();
      new UpdateScreen(calculator).execute();
    }

    new UpdateCurrentOperand(recordBlock).execute(event.target.textContent);
  }

  // single-operator operations===================================================
  if (event.target.hasAttribute('data-single-operation')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;

    calculator.operation.id = event.target.id;
    calculator.operation.sign = event.target.getAttribute('data-value');
    calculator.operation.type = 'single';

    const OperationToExecute = new OperationFactory(
      calculator.operation.id,
      calculator.operation.sign,
      calculator.operation.type,
    ).create([recordBlock.textContent, recordBlock.textContent]);

    if (calculator.executeCommand(OperationToExecute)) {
      OperationsState.addOperation(OperationToExecute);

      new UpdateScreen(calculator).execute();
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAllCalcOperands(calculator).execute();
    }
  }
  // pair-operator operations===================================================
  if (event.target.hasAttribute('data-pair-operation')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;

    // if there's operation to execute
    if (calculator.operation.id !== '') {
      const OperationToExecute = new OperationFactory(
        calculator.operation.id,
        calculator.operation.sign,
        calculator.operation.type,
      ).create([calculator.prevNum, recordBlock.textContent]);

      calculator.executeCommand(OperationToExecute);
      OperationsState.addOperation(OperationToExecute);

      calculator.operation.id = event.target.id;
      calculator.operation.sign = event.target.getAttribute('data-value');
      calculator.operation.type = 'pair';

      // new ClearLeftCalcOperand(calculator).execute();
      new UpdateScreen(calculator).execute();

      return;
    }

    // if there's NO operation to execute
    calculator.prevNum = recordBlock.textContent;
    calculator.operation.id = event.target.id;
    calculator.operation.sign = event.target.getAttribute('data-value');
    calculator.operation.type = 'pair';

    // new ClearLeftCalcOperand(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (event.target.hasAttribute('data-equal')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;
    if (calculator.operation.id === '') return; // '5=' =>5 а не error

    const OperationToExecute = new OperationFactory(
      calculator.operation.id,
      calculator.operation.sign,
      calculator.operation.type,
    ).create([calculator.prevNum, recordBlock.textContent]);

    if (calculator.executeCommand(OperationToExecute)) {
      OperationsState.addOperation(OperationToExecute);
      new UpdateScreen(calculator).execute();
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAllCalcOperands(calculator).execute();
    }
  }

  // rest specific non-automated operations===================================================
  if (event.target.hasAttribute('data-percent')) {
    if (Number.isNaN(+recordBlock.textContent)) return;
    calculator.currentNum =
      calculator.prevNum * (recordBlock.textContent / 100);
    new UpdateScreen(calculator).execute();
  }

  if (event.target.hasAttribute('data-plus-minus')) {
    if (Number.isNaN(+recordBlock.textContent)) return;
    calculator.currentNum = -Number(recordBlock.textContent);
    new UpdateScreen(calculator).execute();
  }

  if (event.target.hasAttribute('data-clear-all')) {
    new ClearAllCalcOperands(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (event.target.hasAttribute('data-clear-entry')) {
    new ClearLeftCalcOperand(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (event.target.hasAttribute('data-undo')) {
    const CommandToUndo = OperationsState.getOperation();
    calculator.forseState(CommandToUndo);
    new ClearLeftCalcOperand(calculator).execute();
    new UpdateScreen(calculator).execute();
  }
});
