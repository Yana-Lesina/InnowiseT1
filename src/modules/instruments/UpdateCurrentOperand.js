// import Instrument from './Instrument';

class UpdateCurrentOperand {
  constructor(textBlock) {
    this.textBlock = textBlock;
  }

  execute(symbol) {
    // forbid users to enter more than one comma
    if (symbol === '.' && this.textBlock.textContent.includes('.')) return;

    this.textBlock.textContent += symbol;

    this.textBlock.textContent = String(this.textBlock.textContent).replace(
      /^00+/g,
      '0',
    );
    this.textBlock.textContent = String(this.textBlock.textContent).replace(
      /^0+[1-9]+/g,
      /[1-9]+/g.exec(String(this.textBlock.textContent)) ||
        this.textBlock.textContent,
    );
  }
}
export default UpdateCurrentOperand;
