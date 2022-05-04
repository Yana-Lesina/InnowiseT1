/* eslint-disable class-methods-use-this */
import Command from './Command';

class Root3 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    if (+right === 1) return 1;

    return right ** (1 / 3);
  }
}

export default Root3;
