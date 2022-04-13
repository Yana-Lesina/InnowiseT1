import Command from './Command';

class RootY extends Command {
  constructor(num) {
    super();
    this.num = num;
  }
  execute(currNum) {
    if (+currNum === 1 || +this.num === 1) return 1;

    return this.num ** (1 / currNum);
  }
}
export default RootY;
