import Command from './Command';

class RootY extends Command {
  execute() {
    const [left, right] = this.operandsArray;
    return left ** (1 / right);
  }
}
export default RootY;
