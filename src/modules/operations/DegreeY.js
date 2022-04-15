import Command from './Command';

class DegreeY extends Command {
  // constructor(num) {
  //   super();
  //   this.num = num;
  // }

  execute() {
    const [left, right] = this.operandsArray;
    return left ** right;
  }
}
export default DegreeY;
