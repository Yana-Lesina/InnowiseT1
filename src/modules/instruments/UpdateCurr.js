import Instrument from './Instrument';

class UpdateCurr extends Instrument {
  execute(symbol) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // ===================================

    // forbid users to enter more than one comma
    if (symbol === '.' && currentOperand.includes('.')) return;

    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (
      this.calc.currentNum !== '' &&
      this.calc.prevNum !== '' &&
      this.calc.operation.id === ''
    ) {
      this.calc.prevNum = '';
      this.calc.currentNum = symbol;
      return;
    }

    this.calc.currentNum += symbol;

    this.calc.currentNum = String(this.calc.currentNum).replace(/^00+/g, '0');
    this.calc.currentNum = String(this.calc.currentNum).replace(
      /^0+[1-9]+/g,
      /[1-9]+/g.exec(String(this.calc.currentNum)) || this.calc.currentNum,
    );
  }
}
export default UpdateCurr;
