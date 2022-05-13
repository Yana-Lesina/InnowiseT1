import Command from './Command';

class Degree3 extends Command {
  execute() {
    const left = this.operandsArray[0];
    return left ** 3;
  }
}
export default Degree3;
