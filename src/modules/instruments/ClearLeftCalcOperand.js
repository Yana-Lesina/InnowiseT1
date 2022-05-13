import Instrument from './Instrument';

class ClearLeftCalcOperand extends Instrument {
  execute() {
    this.calc.currentNum = 0;
  }
}
export default ClearLeftCalcOperand;
