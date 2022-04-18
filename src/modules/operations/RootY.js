import Command from './Command';

class RootY extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return left ** (1 / right);
  }

  undo() {
    const [left] = this.operandsArray;
    return left;
  }
}
export default RootY;
