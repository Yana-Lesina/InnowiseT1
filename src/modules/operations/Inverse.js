/* eslint-disable class-methods-use-this */
import Command from './Command';

class Inverse extends Command {
  execute(currNum) {
    return 1 / currNum;
  }
}

export default Inverse;
