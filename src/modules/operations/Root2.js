/* eslint-disable class-methods-use-this */
import Command from './Command';

class Root2 extends Command {
  execute() {
    const left = this.operandsArray[0];
    if (+left === 1) return 1;

    return left ** (1 / 2);
  }
}
export default Root2;
