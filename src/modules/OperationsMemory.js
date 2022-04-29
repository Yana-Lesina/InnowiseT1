class OperationMemory {
  constructor() {
    this.operations = [];
  }

  addOperation(operation) {
    this.operations.push(operation);
  }

  getOperation() {
    return this.operations.pop();
  }
}

export default OperationMemory;
