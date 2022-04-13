/* eslint-disable max-classes-per-file */
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

export default { AppendPrev, ClearCurr, UpdateCurr, UpdateScreen };
