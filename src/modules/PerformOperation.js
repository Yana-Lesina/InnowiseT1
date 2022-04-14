import UpdateScreen from './instruments/UpdateScreen';
import ClearAll from './instruments/ClearAll';

class PerformOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }

  start() {
    const recordBlock = document.querySelector('.record-data-block');

    if (Number.isNaN(+recordBlock.textContent)) return;

    if (this.calculator.executeCommand(this.calculator.operation)) {
      new UpdateScreen(this.calculator).execute();
    } else {
      recordBlock.textContent = 'invalid operation';
      new ClearAll(this.calculator).execute();
    }
  }
}

export default PerformOperation;
