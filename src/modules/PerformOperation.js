import UpdateScreen from './UpdateScreen';
import ClearAll from './ClearAll';

class PerformOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }
  start() {
    const recordBlock = document.querySelector('.record-data-block');

    if (isNaN(recordBlock.textContent)) return;

    if (this.calculator.executeCommand(this.calculator.operation)) {
      new UpdateScreen().execute(this.calculator);
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAll().execute(this.calculator);
    }
  }
}

export default PerformOperation;
