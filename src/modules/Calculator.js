import Memory from './Memory';

class Calculator {
  constructor() {
    this.currentNum = 0;
    this.prevNum = '';
    this.memory = new Memory();
    this.operation = { sign: '', id: '' };
  }

  executeCommand(command) {
    if (this.currentNum === '') this.currentNum = this.prevNum; // 5+ = 5+5

    const result = command.execute();
    if (result === Infinity || Number.isNaN(+result)) return false; // failed operation

    this.prevNum = parseFloat(result.toFixed(10));
    this.currentNum = parseFloat(result.toFixed(10));
    this.operation = { sign: '', id: '' };
    return true; // successful operation
  }

  forseState(stateObj) {
    const [left, right] = stateObj.operandsArray;
    const [sign, id] = stateObj.operationAttributes;
    this.prevNum = left;
    this.currentNum = right;
    this.operation.sign = sign;
    this.operation.id = id;
  }
}

export default Calculator;
