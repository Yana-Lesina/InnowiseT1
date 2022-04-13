class ClearAll {
  execute(calc) {
    calc.currentNum = 0;
    calc.prevNum = '';
    calc.operation = { sign: '' };
  }
}
export default ClearAll;
