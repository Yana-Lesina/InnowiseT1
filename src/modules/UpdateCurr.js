class UpdateCurr {
  execute(symbol, calc) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // forbid users to enter more than one comma
    if (symbol === '.' && currentOperand.includes('.')) return;

    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (
      calc.currentNum !== '' &&
      calc.prevNum !== '' &&
      calc.operation.execute === undefined
    ) {
      calc.prevNum = '';
      calc.currentNum = symbol;
      return;
    }

    calc.currentNum += symbol;

    // instead of input 0 num => 0num we enter num
    // situation with input .7 processed correctly
    if (symbol !== '.') calc.currentNum = Number(calc.currentNum);
  }
}
export default UpdateCurr;
