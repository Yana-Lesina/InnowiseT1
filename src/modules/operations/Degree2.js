import Command from './Command';

class Degree2 extends Command {
  execute() {
    const left = this.operandsArray[0];
    return left * left;
  }
}
export default Degree2;
