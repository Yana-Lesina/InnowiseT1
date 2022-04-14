import Command from './Command';

class TenDegreeX extends Command {
  execute(currNum) {
    return 10 ** currNum;
  }
}

export default TenDegreeX;
