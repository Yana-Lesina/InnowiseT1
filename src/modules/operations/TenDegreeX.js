import Command from './Command';

class TenDegreeX extends Command {
  execute() {
    const left = this.operandsArray[0];
    return 10 ** left;
  }
}

export default TenDegreeX;
