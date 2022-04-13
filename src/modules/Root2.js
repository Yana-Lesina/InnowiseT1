import Command from './Command';

class Root2 extends Command {
  execute(currNum) {
    if (+currNum === 1) return 1;

    return currNum ** (1 / 2);
  }
}
export default Root2;
