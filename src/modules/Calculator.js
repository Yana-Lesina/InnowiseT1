/* eslint-disable linebreak-style */
import Memory from './Memory';

class Calculator {
  constructor() {
    this.currentNum = 0;
    this.prevNum = '';
    this.memory = new Memory();
    this.operation = { sign: '', id: '' };
    this.history = [];
  }

  executeCommand(command) {
    if (this.currentNum === '') this.currentNum = this.prevNum; // 5+ = 5+5
    if (command.execute() === Infinity || Number.isNaN(+command.execute()))
      return false; // failed operation

    this.prevNum = command.execute();
    this.currentNum = command.execute();
    this.operation = { sign: '', id: '' };
    return true; // successful operation
  }
}

export default Calculator;
