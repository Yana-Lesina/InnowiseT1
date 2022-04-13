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
    this.history.push(command);
    if (this.currentNum === '') this.currentNum = this.prevNum; // 5+ = 5+5
    this.prevNum = command.execute(this.currentNum);
    this.currentNum = command.execute(this.currentNum);
    this.operation = { sign: '' };
    return this;
  }

  // undoCommand() {
  //   const command = this.history.pop(); // потому что pop возвращает удалённое значение
  //   this.currentNum = command.undo(this.prevNum);
  //   this.prevNum = command.undo(this.prevNum);
  //   this.operation = { sign: '' };
  //   return this;
  // }
}

export default Calculator;
