import Command from './Command';

class Fact extends Command {
  execute(num) {
    if (+num < 0) return 'invalid input';

    return num !== 1 ? num * this.execute(num - 1) : num;
  }
}
export default Fact;
