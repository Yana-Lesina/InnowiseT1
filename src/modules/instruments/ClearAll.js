import Instrument from './Instrument';

class ClearAll extends Instrument {
  execute() {
    this.calc.currentNum = 0;
    this.calc.prevNum = '';
    this.calc.operation = { sign: '' };
  }
}
export default ClearAll;
