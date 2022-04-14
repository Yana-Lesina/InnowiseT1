import Instrument from './Instrument';

class UpdateScreen extends Instrument {
  constructor(calc) {
    super(calc);
    this.currentOperand = document.querySelector('.record-data-block');
    this.prevOperand = document.querySelector('.prev-data-block');
  }

  execute() {
    this.currentOperand.textContent = this.calc.currentNum;
    this.prevOperand.textContent = `${this.calc.prevNum} ${this.calc.operation.sign}`;
  }
}
export default UpdateScreen;
