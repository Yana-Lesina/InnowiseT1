import Command from './Command';

class DegreeY extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return left ** right;
  }
}
export default DegreeY;
