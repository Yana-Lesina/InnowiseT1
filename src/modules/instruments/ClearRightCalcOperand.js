import Instrument from './Instrument';

class ClearRightCalcOperand extends Instrument {
  execute() {
    this.calc.currentNum = 0;
  }
}
export default ClearRightCalcOperand;
