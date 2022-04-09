/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
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

class Calculator {
  constructor() {
    this.currentNum = '';
    this.prevNum = '';
    this.memoryNum = '';
    this.operation = { sign: '' };
    this.history = [];
  }

  executeCommand(command) {
    this.history.push(command);
    this.prevNum = command.execute(this.currentNum);
    this.currentNum = command.execute(this.currentNum);
    this.operation = { sign: '' };
    // new UpdateScreen().execute(this);
    return this;
  }

  undoCommand() {
    const command = this.history.pop();
    this.currentNum = command.execute(this.currentNum);
    new UpdateScreen().execute(this);
  }
}

class UpdateCurr {
  execute(symbol, obj) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    if (symbol === '.' && currentOperand.includes('.')) return;

    // if (obj.operation.sign !== '' && obj.prevNum === '') {
    //   obj.prevNum = obj.currentNum;
    //   obj.currentNum = '';
    // }
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

class Add {
  constructor(num) {
    this.num = num;
  }

  execute(currNum) {
    return +this.num + +currNum;
  }

  undo(currNum) {
    return +this.num - +currNum;
  }
}

class Substract {
  constructor(num) {
    this.num = num;
  }

  execute(currNum) {
    return +this.num - +currNum;
  }

  undo(currNum) {
    return +this.num + +currNum;
  }
}

class Mult {
  constructor(num) {
    this.num = num;
  }

  execute(currNum) {
    return +this.num * +currNum;
  }

  undo(currNum) {
    return +this.num / +currNum;
  }
}

class Divide {
  constructor(num) {
    this.num = num;
  }

  execute(currNum) {
    return +this.num / +currNum;
  }

  undo(currNum) {
    return +this.num * +currNum;
  }
}

class OperationFactory {
  constructor(sign) {
    this.sign = sign;
  }

  static list = {
    add: Add,
    substract: Substract,
    mult: Mult,
    divide: Divide,
  };

  create(num, operType) {
    const Operation = OperationFactory.list[operType]; // Add
    const oper = new Operation(num); // new Add
    oper.sign = this.sign;
    return oper;
  }
}

const numberBtns = document.querySelectorAll('[data-num]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-operation-equal]');
const calculator = new Calculator();

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
});
