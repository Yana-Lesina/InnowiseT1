import Command from './Command';

class Fact extends Command {
  count(num) {
    return num !== 1 ? num * this.count(num - 1) : num;
  }

  execute() {
    const [, right] = this.operandsArray;
    if (+right < 0 || +right >= 1000) {
      // 1000 for fitting right in callstack
      return 'invalid input';
    }
    return this.count(right);
  }

  undo() {
    const [, right] = this.operandsArray;
    return right;
  }
}
export default Fact;
