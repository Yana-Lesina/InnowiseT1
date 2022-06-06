import Memory from './Memory';

class Calculator {
  constructor() {
    this.currentNum = 0;
    this.prevNum = '';
    this.memory = new Memory();
    this.operation = { sign: '', id: '', type: '' };
  }

  static memoryOperations = {
    MC: 'data-memory-clear',
    'M+': 'data-memory-add',
    'M-': 'data-memory-substr',
    MR: 'data-memory-recall',
  };

  executeCommand(command) {
    const result = command.execute();
    if (result === Infinity || Number.isNaN(+result)) return false; // failed operation

    this.prevNum = parseFloat(result.toFixed(10));
    this.currentNum = '';

    this.operation = { sign: '', id: '', type: '' };
    return true; // successful operation
  }

  forceState(state) {
    if (state.length === 0) {
      this.prevNum = '';
      this.currentNum = 0;
      this.operation = { sign: '', id: '', type: '' };
      return;
    }

    [this.prevNum, this.currentNum] = state.operandsArray;
    [this.operation.sign, this.operation.id, this.operation.type] =
      state.operationAttributes;
  }
}

export default Calculator;
