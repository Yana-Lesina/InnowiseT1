/* eslint-disable class-methods-use-this */
import Command from './Command';

class Degree3 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    return right * right * right;
  }

  undo() {
    const [, right] = this.operandsArray;
    return right;
  }
}
export default Degree3;
