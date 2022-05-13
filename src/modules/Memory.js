class Memory {
  memoryNum = 0;

  add(num) {
    this.memoryNum += Number(num);
    return this.memoryNum;
  }

  substr(num) {
    this.memoryNum -= Number(num);
    return this.memoryNum;
  }

  recall() {
    return Number(this.memoryNum);
  }

  clear() {
    this.memoryNum = 0;
  }
}

export default Memory;
