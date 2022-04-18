/* eslint-disable class-methods-use-this */
import Command from './Command';

class Root3 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    if (+right === 1) return 1;

    return right ** (1 / 3);
  }

  undo() {
    const [, right] = this.operandsArray;
    return right;
  }
}

export default Root3;
