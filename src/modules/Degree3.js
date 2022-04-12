import Command from './Command';

class Degree3 extends Command {
  execute(currNum) {
    return currNum * currNum * currNum;
  }

  // undo(currNum) {
  //   return +currNum - +this.num;
  // }
}
export default Degree3;
