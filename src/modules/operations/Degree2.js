import Command from './Command';

class Degree2 extends Command {
  execute() {
    const [, right] = this.operandsArray;
    return right * right;
  }

  undo() {
    const [, right] = this.operandsArray;
    return right;
  }
}
export default Degree2;
