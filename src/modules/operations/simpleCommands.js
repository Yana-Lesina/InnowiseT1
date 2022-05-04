/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left + +right;
  }
}

class Substract extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left - +right;
  }
}

class Mult extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left * +right;
  }
}

class Divide extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return +left / +right;
  }
}

export { Add, Substract, Mult, Divide };
