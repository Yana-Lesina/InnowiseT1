import Instrument from './Instrument';

class ClearEntry extends Instrument {
  execute() {
    this.calc.currentNum = 0;
  }
}
export default ClearEntry;
