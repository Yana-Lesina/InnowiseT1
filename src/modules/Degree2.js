import Command from './Command';

class Degree2 extends Command {
  execute(currNum) {
    return currNum * currNum;
  }

  // undo(currNum) {
  //   return +currNum - +this.num;
  // }
}
export default Degree2;
