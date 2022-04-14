class AppendPrev {
  execute(calc) {
    calc.prevNum = calc.currentNum;
    calc.currentNum = '';
  }
}

export default AppendPrev;
