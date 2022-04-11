/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */

import Calculator from './modules/Calculator';
import OperationFactory from './modules/simpleCommands';

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

    if (symbol === '.' && currentOperand.includes('.')) return;

    obj.currentNum += symbol;
  }
}

class AppendPrev {
  execute(obj) {
    obj.prevNum = obj.currentNum;
  }
}

class ClearCurr {
  execute(obj) {
    obj.currentNum = '';
  }
}

const numberBtns = document.querySelectorAll('[data-num]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-operation-equal]');
const calculator = new Calculator();
console.log(calculator);

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
      ).create(calculator.currentNum, operationBtn.id);

      new UpdateScreen().execute(calculator);
      new ClearCurr().execute(calculator);

      return;
    }

    new AppendPrev().execute(calculator);

    calculator.operation = new OperationFactory(
      operationBtn.textContent
    ).create(calculator.currentNum, operationBtn.id);

    new UpdateScreen().execute(calculator);
    new ClearCurr().execute(calculator);
  });
});

equalBtn.addEventListener('click', () => {
  calculator.executeCommand(calculator.operation);

  new UpdateScreen().execute(calculator);
  new ClearCurr().execute(calculator);
});
