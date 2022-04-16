/* eslint-disable class-methods-use-this */
class Command {
  constructor(operandsArray) {
    this.operandsArray = operandsArray;
  }

  execute() {
    throw new Error('Execute method is not implemented');
  }

  undo() {
    throw new Error('Undo method is not implemented');
  }
}

export default Command;
