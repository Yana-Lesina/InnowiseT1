import Command from './Command';

class DegreeY extends Command {
  constructor(num) {
    super();
    this.num = num;
  }

  execute(currNum) {
    return this.num ** currNum;
  }
}
export default DegreeY;
