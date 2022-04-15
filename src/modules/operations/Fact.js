import Command from './Command';

class Fact extends Command {
  count(num) {
    return num !== 1 ? num * this.count(num - 1) : num;
  }

  execute() {
    const [, right] = this.operandsArray;
    if (+right < 0) return 'invalid input';

    return this.count(right);
  }
}
export default Fact;
