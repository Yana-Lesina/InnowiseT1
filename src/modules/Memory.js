class Memory {
  memNum = 0;

  add(num) {
    this.memNum += +num;
    return this.memNum;
  }
  substr(num) {
    this.memNum -= +num;
    return this.memNum;
  }
  recall() {
    return this.memNum;
  }
  clear() {
    this.memNum = 0;
  }
}

export default Memory;
