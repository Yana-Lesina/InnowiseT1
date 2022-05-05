import './style.css';
import './images/icon.png';
import './images/day-and-night1.png';

import Calculator from './modules/Calculator';
import OperationFactory from './modules/OperationFactory';
import StateManager from './modules/StateManager';

import changeTheme from './modules/changeTheme';

import ClearAll from './modules/instruments/ClearAll';
import ClearEntry from './modules/instruments/ClearEntry';
import UpdateScreen from './modules/instruments/UpdateScreen';
import ClearCurr from './modules/instruments/ClearCurr';
import UpdateCurrentOperand from './modules/instruments/UpdateCurrentOperand';

const calculator = new Calculator();
const OperationsState = new StateManager();
const memoryBtnsBlock = document.querySelector('.m-btns');
const recordBlock = document.querySelector('.record-data-block');
const btnsBlock = document.querySelector('.btns');

changeTheme();

memoryBtnsBlock.addEventListener('click', e => {
  const memAlarmBlock = document.querySelector('.mem-data-block');

  if (Number.isNaN(Number(recordBlock.textContent))) return;

  if (e.target.hasAttribute('data-memory-clear')) {
    calculator.memory.clear();
    memAlarmBlock.textContent = '';
  }
  if (e.target.hasAttribute('data-memory-add')) {
    calculator.memory.add(recordBlock.textContent);
    memAlarmBlock.textContent = 'M';
  }
  if (e.target.hasAttribute('data-memory-substr')) {
    calculator.memory.substr(recordBlock.textContent);
    memAlarmBlock.textContent = 'M';
  }
  if (e.target.hasAttribute('data-memory-recall')) {
    calculator.currentNum = calculator.memory.recall();
    new UpdateScreen(calculator).execute();
  }
});

btnsBlock.addEventListener('click', e => {
  if (e.target.hasAttribute('data-num')) {
    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (calculator.prevNum !== '' && calculator.operation.id === '') {
      new ClearAll(calculator).execute();
      new UpdateScreen(calculator).execute();
    }
    new UpdateCurrentOperand(recordBlock).execute(e.target.textContent);
  }

  // single-operator operations===================================================
  if (e.target.hasAttribute('data-single-operation')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;

    calculator.operation.id = e.target.id;
    calculator.operation.sign = e.target.getAttribute('data-value');

    const OperationToExecute = new OperationFactory(
      calculator.operation.id,
      calculator.operation.sign,
    ).create([recordBlock.textContent, recordBlock.textContent]);

    if (calculator.executeCommand(OperationToExecute)) {
      OperationsState.addOperation(OperationToExecute);

      new UpdateScreen(calculator).execute();
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAll(calculator).execute();
    }
  }
  // pair-operator operations===================================================
  if (e.target.hasAttribute('data-pair-operation')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;

    // if there's operation to execute
    if (calculator.operation.id !== '') {
      const OperationToExecute = new OperationFactory(
        calculator.operation.id,
        calculator.operation.sign,
      ).create([calculator.prevNum, recordBlock.textContent]);

      calculator.executeCommand(OperationToExecute);
      OperationsState.addOperation(OperationToExecute);

      calculator.operation.id = e.target.id;
      calculator.operation.sign = e.target.getAttribute('data-value');

      new ClearCurr(calculator).execute();
      new UpdateScreen(calculator).execute();

      return;
    }

    // if there's NO operation to execute
    calculator.prevNum = recordBlock.textContent;
    calculator.operation.id = e.target.id;
    calculator.operation.sign = e.target.getAttribute('data-value');

    new ClearCurr(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-equal')) {
    if (Number.isNaN(Number(recordBlock.textContent))) return;
    if (calculator.operation.id === '') return; // '5=' =>5 а не error

    const OperationToExecute = new OperationFactory(
      calculator.operation.id,
      calculator.operation.sign,
    ).create([calculator.prevNum, recordBlock.textContent]);

    if (calculator.executeCommand(OperationToExecute)) {
      OperationsState.addOperation(OperationToExecute);
      new UpdateScreen(calculator).execute();
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAll(calculator).execute();
    }
  }

  // rest specific non-automated operations===================================================
  if (e.target.hasAttribute('data-percent')) {
    if (Number.isNaN(+recordBlock.textContent)) return;
    calculator.currentNum =
      calculator.prevNum * (recordBlock.textContent / 100);
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-plus-minus')) {
    if (Number.isNaN(+recordBlock.textContent)) return;
    calculator.currentNum = -Number(recordBlock.textContent);
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-clear-all')) {
    new ClearAll(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-clear-entry')) {
    new ClearEntry(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-undo')) {
    const CommandToUndo = OperationsState.getOperation();
    calculator.forseState(CommandToUndo);
    new ClearCurr(calculator).execute();
    new UpdateScreen(calculator).execute();
  }
});
