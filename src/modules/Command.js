/* eslint-disable linebreak-style */
class Command {
  constructor(num) {
    this.num = num;
  }

  execute(currNum) {
    return +this.num + +currNum;
  }

  undo(currNum) {
    return +this.num - +currNum;
  }
}

export default Command;
