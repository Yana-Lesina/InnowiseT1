class AppendPrev {
  execute(obj) {
    obj.prevNum = obj.currentNum;
    obj.currentNum = '';
  }
}

export default AppendPrev;
