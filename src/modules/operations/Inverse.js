import Command from './Command';

class Inverse extends Command {
  execute() {
    const left = this.operandsArray[0];
    return 1 / left;
  }
}

export default Inverse;
