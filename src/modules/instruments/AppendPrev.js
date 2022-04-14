import Instrument from './Instrument';

class AppendPrev extends Instrument {
  execute() {
    this.calc.prevNum = this.calc.currentNum;
    this.calc.currentNum = '';
  }
}

export default AppendPrev;
