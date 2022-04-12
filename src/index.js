/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */

import Calculator from './modules/Calculator';
import OperationFactory from './modules/OperationFactory';
import Clear from './modules/ClearAll';
import ClearEntry from './modules/ClearEnrty';

class UpdateScreen {
  constructor() {
    this.currentOperand = document.querySelector('.record-data-block');
    this.prevOperand = document.querySelector('.prev-data-block');
  }

  execute(obj) {
    this.currentOperand.textContent = obj.currentNum;
    this.prevOperand.textContent = `${obj.prevNum} ${obj.operation.sign}`;
  }
}

class UpdateCurr {
  execute(symbol, obj) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // чтобы юзеры не писали нескольлко точек
    if (symbol === '.' && currentOperand.includes('.')) return;
    if (symbol === '0' && obj.currentNum === '') return;
    // была операция = то в current записываем число заново, т.е 5+2=7, вводим 8 => 8, а не 87
    if (
      calculator.currentNum !== '' &&
      calculator.prevNum !== '' &&
      calculator.operation.execute === undefined
    ) {
      obj.prevNum = '';
      obj.currentNum = symbol;
      return;
    }

    obj.currentNum += symbol;
  }
}

class AppendPrev {
  execute(obj) {
    obj.prevNum = obj.currentNum;
    obj.currentNum = '';
  }
}

class ClearCurr {
  execute(obj) {
    obj.currentNum = '';
  }
}

const calculator = new Calculator();
const numberBtns = document.querySelectorAll('[data-num]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-operation-equal]');
const clearAllBtn = document.querySelector('[data-clear-all]');
const clearEntryBtn = document.querySelector('[data-clear-entry]');
const undoBtn = document.querySelector('[data-undo]');

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener('click', () => {
    new UpdateCurr().execute(numberBtn.textContent, calculator);
    new UpdateScreen().execute(calculator);
  });
});

operationBtns.forEach((operationBtn) => {
  operationBtn.addEventListener('click', () => {
    if (calculator.operation.execute !== undefined) {
      calculator.executeCommand(calculator.operation);

      calculator.operation = new OperationFactory(
        operationBtn.textContent
      ).create(calculator.prevNum, operationBtn.id);

      new ClearCurr().execute(calculator);
      new UpdateScreen().execute(calculator);

      return;
    }

    new AppendPrev().execute(calculator);

    calculator.operation = new OperationFactory(
      operationBtn.textContent
    ).create(calculator.prevNum, operationBtn.id);

    new ClearCurr().execute(calculator);
    new UpdateScreen().execute(calculator);
  });
});

equalBtn.addEventListener('click', () => {
  calculator.executeCommand(calculator.operation);
  new UpdateScreen().execute(calculator);
});

clearAllBtn.addEventListener('click', () => {
  new Clear().execute(calculator);
  new UpdateScreen().execute(calculator);
});

clearEntryBtn.addEventListener('click', () => {
  new ClearEntry().execute(calculator);
  new UpdateScreen().execute(calculator);
});

undoBtn.addEventListener('click', () => {
  calculator.undoCommand(calculator.operation);
  new UpdateScreen().execute(calculator);
  new ClearCurr().execute(calculator);
});
