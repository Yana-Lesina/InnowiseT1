/* eslint-disable class-methods-use-this */
import Command from './Command';

class TenDegreeX extends Command {
  execute() {
    const [, right] = this.operandsArray;
    return 10 ** right;
  }

  undo() {
    const [, right] = this.operandsArray;
    return right;
  }
}

export default TenDegreeX;
