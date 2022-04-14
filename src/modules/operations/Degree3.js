/* eslint-disable class-methods-use-this */
import Command from './Command';

class Degree3 extends Command {
  execute(currNum) {
    return currNum * currNum * currNum;
  }
}
export default Degree3;
