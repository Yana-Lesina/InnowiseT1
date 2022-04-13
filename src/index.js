/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
// import {
//   AppendPrev,
//   ClearCurr,
//   UpdateCurr,
//   UpdateScreen
// } from './modules/instruments';

import Calculator from './modules/Calculator';
import OperationFactory from './modules/OperationFactory';
import ClearAll from './modules/ClearAll';
import ClearEntry from './modules/ClearEntry';
// import Memory from './modules';

import Degree2 from './modules/Degree2';
import Degree3 from './modules/Degree3';
import Root2 from './modules/Root2';
import Root3 from './modules/Root3';

// console.log(new UpdateCurr());
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

class UpdateCurr {
  execute(symbol, obj) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // чтобы юзеры не писали нескольлко точек
    if (symbol === '.' && currentOperand.includes('.')) return;

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

    // чтобы вместо ввода 0 num => 0num было num
    // ситуация с вводом .7 обрабатывается правильно
    if (symbol !== '.') obj.currentNum = Number(obj.currentNum);
  }
}

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

const calculator = new Calculator();
const memoryBtnsBlock = document.querySelector('.m-btns');
const btnsBlock = document.querySelector('.btns');

memoryBtnsBlock.addEventListener('click', (e) => {
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
    new UpdateCurr().execute(recordBlock.textContent, calculator);
  }
});

btnsBlock.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-num')) {
    new UpdateCurr().execute(e.target.textContent, calculator);
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-operation')) {
    if (isNaN(document.querySelector('.record-data-block').textContent)) return;
    if (calculator.operation.execute !== undefined) {
      calculator.executeCommand(calculator.operation);

      calculator.operation = new OperationFactory(
        e.target.getAttribute('data-value')
      ).create(calculator.prevNum, e.target.id);

      new ClearCurr().execute(calculator);
      new UpdateScreen().execute(calculator);

      return;
    }

    new AppendPrev().execute(calculator);

    calculator.operation = new OperationFactory(
      e.target.getAttribute('data-value')
    ).create(calculator.prevNum, e.target.id);

    new ClearCurr().execute(calculator);
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-equal')) {
    console.log('data-equal');
    if (calculator.operation.execute === undefined) return; // enter '5=' =>5

    calculator.executeCommand(calculator.operation);
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-clear-all')) {
    new ClearAll().execute(calculator);
    new UpdateScreen().execute(calculator);
  }
  if (e.target.hasAttribute('data-clear-entry')) {
    new ClearEntry().execute(calculator);
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-degree2')) {
    calculator.executeCommand(new Degree2());
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-degree3')) {
    calculator.executeCommand(new Degree3());
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-root2')) {
    calculator.executeCommand(new Root2());
    new UpdateScreen().execute(calculator);
  }

  if (e.target.hasAttribute('data-root3')) {
    calculator.executeCommand(new Root3());
    new UpdateScreen().execute(calculator);
  }
});
