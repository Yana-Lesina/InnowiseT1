/* eslint-disable class-methods-use-this */
import Command from './Command';

class Degree2 extends Command {
  execute(currNum) {
    return currNum * currNum;
  }
}
export default Degree2;
