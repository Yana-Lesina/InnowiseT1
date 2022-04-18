import Command from './Command';

class DegreeY extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return left ** right;
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}
export default DegreeY;
