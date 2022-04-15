import Instrument from './Instrument';

class ClearCurr extends Instrument {
  execute() {
    this.calc.currentNum = 0;
  }
}
export default ClearCurr;
