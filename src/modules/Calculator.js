/* eslint-disable linebreak-style */
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
    return this;
  }

  undoCommand() {
    const command = this.history.pop();
    this.currentNum = command.execute(this.currentNum);
  }
}

export default Calculator;
