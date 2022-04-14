import Instrument from './Instrument';

class UpdateCurr extends Instrument {
  execute(symbol) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // forbid users to enter more than one comma
    if (symbol === '.' && currentOperand.includes('.')) return;

    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (
      this.calc.currentNum !== '' &&
      this.calc.prevNum !== '' &&
      this.calc.operation.execute === undefined
    ) {
      this.calc.prevNum = '';
      this.calc.currentNum = symbol;
      return;
    }

    this.calc.currentNum += symbol;

    // instead of input 0 num => 0num we enter num
    // situation with input .7 processed correctly
    if (symbol !== '.') this.calc.currentNum = Number(this.calc.currentNum);
  }
}
export default UpdateCurr;
