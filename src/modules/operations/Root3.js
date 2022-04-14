/* eslint-disable class-methods-use-this */
import Command from './Command';

class Root3 extends Command {
  execute(currNum) {
    if (+currNum === 1) return 1;

    return currNum ** (1 / 3);
  }
}

export default Root3;
