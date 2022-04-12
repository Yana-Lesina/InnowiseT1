/* eslint-disable linebreak-style */
import { Add, Substract, Mult, Divide } from './simpleCommands';
import DegreeY from './DegreeY';

class OperationFactory {
  constructor(sign) {
    this.sign = sign;
  }

  static list = {
    add: Add,
    substract: Substract,
    mult: Mult,
    divide: Divide,
    'degree-y': DegreeY,
  };

  create(num, operType) {
    const Operation = OperationFactory.list[operType]; // Add
    const oper = new Operation(num); // new Add
    oper.sign = this.sign;
    return oper;
  }
}

export default OperationFactory;
