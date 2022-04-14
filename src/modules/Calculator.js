/* eslint-disable linebreak-style */
import Memory from './Memory';

class Calculator {
  constructor() {
    this.currentNum = 0;
    this.prevNum = '';
    this.memory = new Memory();
    this.operation = { sign: '' };
    this.history = [];
  }

  executeCommand(command) {
    if (this.currentNum === '') this.currentNum = this.prevNum; // 5+ = 5+5
    if (
      command.execute(this.currentNum) === Infinity ||
      Number.isNaN(+command.execute(this.currentNum))
    )
      return false; // failed operation

    this.prevNum = command.execute(this.currentNum);
    this.currentNum = command.execute(this.currentNum);
    this.operation = { sign: '' };
    return true; // successful operation
  }
}

export default Calculator;
