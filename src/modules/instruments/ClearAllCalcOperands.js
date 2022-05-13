import Instrument from './Instrument';

class ClearAllCalcOperands extends Instrument {
  execute() {
    this.calc.currentNum = 0;
    this.calc.prevNum = '';
    this.calc.operation = { sign: '', id: '', type: '' };
  }
}
export default ClearAllCalcOperands;
