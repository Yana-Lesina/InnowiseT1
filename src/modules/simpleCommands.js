/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */

import Command from './Command';

class Add extends Command {
  // constructor(num) {
  //   super();
  //   this.num = num;
  // }
  execute(currNum) {
    return +this.num + +currNum;
  }

  undo(currNum) {
    return +currNum - +this.num;
  }
}

class Substract extends Command {
  // constructor(num) {
  //   super();
  //   this.num = num;
  // }
  execute(currNum) {
    return +this.num - +currNum;
  }

  undo(currNum) {
    return +currNum + +this.num;
  }
}

class Mult extends Command {
  // constructor(num) {
  //   super();
  //   this.num = num;
  // }
  execute(currNum) {
    return +this.num * +currNum;
  }

  undo(currNum) {
    return +currNum / +this.num;
  }
}

class Divide extends Command {
  // constructor(num) {
  //   super();
  //   this.num = num;
  // }
  execute(currNum) {
    return +this.num / +currNum;
  }

  undo(currNum) {
    return +currNum * +this.num;
  }
}

export { Add, Substract, Mult, Divide };
