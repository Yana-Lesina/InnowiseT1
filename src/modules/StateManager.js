class StateManager {
  constructor() {
    this.operations = [];
  }

  addOperation(operation) {
    this.operations.push(operation);
  }

  getOperation() {
    if (this.operations.length === 0) return [];
    return this.operations.pop();
  }
}

export default StateManager;
