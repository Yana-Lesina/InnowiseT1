/* eslint-disable class-methods-use-this */
import Command from './Command';

class Degree2 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    return right * right;
  }
}
export default Degree2;
