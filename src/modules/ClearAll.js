class ClearAll {
  execute(calc) {
    calc.currentNum = '';
    calc.prevNum = '';
    calc.operation = { sign: '' };
  }
}
export default ClearAll;
