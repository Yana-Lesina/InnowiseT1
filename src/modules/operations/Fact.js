import Command from './Command';

class Fact extends Command {
  count(num) {
    return num !== 1 ? num * this.count(num - 1) : num;
  }

  execute() {
    const left = this.operandsArray[0];
    if (+left === 0 || +left === 1) return 1;
    if (+left < 0 || +left >= 1000) {
      // 1000 for fitting right in callstack
      return 'invalid input';
    }
    return this.count(left);
  }
}
export default Fact;
