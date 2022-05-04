/* eslint-disable class-methods-use-this */
import Command from './Command';

class Root2 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    if (+right === 1) return 1;

    return right ** (1 / 2);
  }
}
export default Root2;
