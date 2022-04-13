/* eslint-disable linebreak-style */
class Command {
  constructor(num) {
    this.num = num;
  }
  execute() {
    return +this.num;
  }

  undo() {
    return +this.num;
  }
}

export default Command;
