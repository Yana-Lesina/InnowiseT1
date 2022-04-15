/* eslint-disable class-methods-use-this */
import Command from './Command';

class Inverse extends Command {
  execute() {
    const [, right] = this.operandsArray;
    return 1 / right;
  }
}

export default Inverse;
