import Instrument from './Instrument';

class ClearCurr extends Instrument {
  execute() {
    this.calc.currentNum = '';
  }
}
export default ClearCurr;
