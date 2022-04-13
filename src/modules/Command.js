/* eslint-disable linebreak-style */
class Command {
  execute() {
    return +this.num;
  }

  undo() {
    return +this.num;
  }
}

export default Command;
