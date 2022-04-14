/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  execute(currNum) {
    return +this.num + +currNum;
  }

  undo(currNum) {
    return +currNum - +this.num;
  }
}

class Substract extends Command {
  execute(currNum) {
    return +this.num - +currNum;
  }

  undo(currNum) {
    return +currNum + +this.num;
  }
}

class Mult extends Command {
  execute(currNum) {
    return +this.num * +currNum;
  }

  undo(currNum) {
    return +currNum / +this.num;
  }
}

class Divide extends Command {
  execute(currNum) {
    return +this.num / +currNum;
  }

  undo(currNum) {
    return +currNum * +this.num;
  }
}

export { Add, Substract, Mult, Divide };
