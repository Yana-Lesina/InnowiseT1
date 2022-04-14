class UpdateCurr {
  execute(symbol, obj) {
    const currentOperand =
      document.querySelector('.record-data-block').textContent;

    // forbid users to enter more than one comma
    if (symbol === '.' && currentOperand.includes('.')) return;

    // if there's = we renew currentBlock ( 5+2=7, then if input 8 => 8, not 87)
    if (
      calculator.currentNum !== '' &&
      calculator.prevNum !== '' &&
      calculator.operation.execute === undefined
    ) {
      obj.prevNum = '';
      obj.currentNum = symbol;
      return;
    }

    obj.currentNum += symbol;

    // instead of input 0 num => 0num we enter num
    // situation with input .7 processed correctly
    if (symbol !== '.') obj.currentNum = Number(obj.currentNum);
  }
}
export default UpdateCurr;
