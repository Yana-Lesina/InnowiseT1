/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  execute(currNum) {
    return +this.num + +currNum;
  }

  undo(currNum) {
    return +this.num - +currNum;
  }
}

class Substract extends Command {
  execute(currNum) {
    return +this.num - +currNum;
  }

  undo(currNum) {
    return +this.num + +currNum;
  }
}

class Mult extends Command {
  execute(currNum) {
    return +this.num * +currNum;
  }

  undo(currNum) {
    return +this.num / +currNum;
  }
}

class Divide extends Command {
  execute(currNum) {
    return +this.num / +currNum;
  }

  undo(currNum) {
    return +this.num * +currNum;
  }
}

export { Add, Substract, Mult, Divide };
