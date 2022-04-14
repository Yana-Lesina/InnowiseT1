import Calculator from './modules/Calculator';
import PerformOperation from './modules/PerformOperation';
import OperationFactory from './modules/OperationFactory';

import ClearAll from './modules/instruments/ClearAll';
import ClearEntry from './modules/instruments/ClearEntry';
import UpdateScreen from './modules/instruments/UpdateScreen';
import AppendPrev from './modules/instruments/AppendPrev';
import ClearCurr from './modules/instruments/ClearCurr';
import UpdateCurr from './modules/instruments/UpdateCurr';

const calculator = new Calculator();
const memoryBtnsBlock = document.querySelector('.m-btns');
const btnsBlock = document.querySelector('.btns');

memoryBtnsBlock.addEventListener('click', e => {
  const recordBlock = document.querySelector('.record-data-block');
  const memAlarmBlock = document.querySelector('.mem-data-block');
  memAlarmBlock.textContent = 'M';

  if (e.target.hasAttribute('data-memory-clear')) {
    calculator.memory.clear();
    memAlarmBlock.textContent = '';
  }
  if (e.target.hasAttribute('data-memory-add')) {
    calculator.memory.add(recordBlock.textContent);
  }
  if (e.target.hasAttribute('data-memory-substr')) {
    calculator.memory.substr(recordBlock.textContent);
  }
  if (e.target.hasAttribute('data-memory-recall')) {
    recordBlock.textContent = calculator.memory.recall();
    new UpdateCurr(calculator).execute(recordBlock.textContent);
  }
});

btnsBlock.addEventListener('click', e => {
  if (e.target.hasAttribute('data-num')) {
    new UpdateCurr(calculator).execute(e.target.textContent);
    new UpdateScreen(calculator).execute();
  }

  // single-operator operations=======================================================

  if (e.target.hasAttribute('data-single-oper')) {
    calculator.operation = new OperationFactory().create(
      calculator.currentNum,
      e.target.id,
    );
    new PerformOperation(calculator).start();
  }
  // pair-operator operations=======================================================
  if (e.target.hasAttribute('data-pair-oper')) {
    if (Number.isNaN(+document.querySelector('.record-data-block').textContent))
      return;

    // if there's operation to execute
    if (calculator.operation.execute !== undefined) {
      calculator.executeCommand(calculator.operation);

      calculator.operation = new OperationFactory(
        e.target.getAttribute('data-value'),
      ).create(calculator.prevNum, e.target.id);

      new ClearCurr(calculator).execute();
      new UpdateScreen(calculator).execute();

      return;
    }

    // if there's NO operation to execute
    new AppendPrev(calculator).execute();

    calculator.operation = new OperationFactory(
      e.target.getAttribute('data-value'),
    ).create(calculator.prevNum, e.target.id);

    new ClearCurr(calculator).execute();
    new UpdateScreen(calculator).execute();
  }

  if (e.target.hasAttribute('data-equal')) {
    if (calculator.operation.execute === undefined) return; // '5=' =>5 а не error
    new PerformOperation(calculator).start();
  }

  // rest specific non-automated operations======================================================
  if (e.target.hasAttribute('data-percent')) {
    const recordBlock = document.querySelector('.record-data-block');
    if (Number.isNaN(+recordBlock.textContent)) return;
    calculator.currentNum =
      calculator.prevNum * (recordBlock.textContent / 100);
    new UpdateScreen(calculator).execute();
  }
  if (e.target.hasAttribute('data-plus-minus')) {
    const recordBlock = document.querySelector('.record-data-block');
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
});
