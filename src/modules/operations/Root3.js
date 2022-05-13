import Command from './Command';

class Root3 extends Command {
  execute() {
    const left = this.operandsArray[0];
    if (+left === 1) return 1;

    return left ** (1 / 3);
  }
}

export default Root3;
