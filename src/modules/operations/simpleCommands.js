/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left + +right;
  }

  // undo() {
  //   return +currNum - +this.num;
  // }
}

class Substract extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left - +right;
  }

  // undo() {
  //   return +currNum + +this.num;
  // }
}

class Mult extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left * +right;
  }

  // undo() {
  //   return +currNum / +this.num;
  // }
}

class Divide extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left / +right;
  }

  // undo() {
  //   return +currNum * +this.num;
  // }
}

export { Add, Substract, Mult, Divide };
