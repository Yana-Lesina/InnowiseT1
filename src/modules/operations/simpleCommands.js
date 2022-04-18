/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left + +right;
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}

class Substract extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left - +right;
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}

class Mult extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left * +right;
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}

class Divide extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left / +right;
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}

export { Add, Substract, Mult, Divide };
