class Memory {
  memNum = 0;

  add(num) {
    this.memNum += Number(num);
    return this.memNum;
  }

  substr(num) {
    this.memNum -= Number(num);
    return this.memNum;
  }

  recall() {
    return Number(this.memNum);
  }

  clear() {
    this.memNum = 0;
  }
}

export default Memory;
