import { Add, Substract, Mult, Divide } from './operations/simpleCommands';
import Degree2 from './operations/Degree2';
import Degree3 from './operations/Degree3';
import DegreeY from './operations/DegreeY';
import Root2 from './operations/Root2';
import Root3 from './operations/Root3';
import RootY from './operations/RootY';
import Fact from './operations/Fact';
import Inverse from './operations/Inverse';
import TenDegreeX from './operations/TenDegreeX';

class OperationFactory {
  constructor(id, sign, type) {
    this.operationId = id;
    this.operationSign = sign;
    this.operationType = type;
  }

  static list = {
    '+': Add,
    '-': Substract,
    x: Mult,
    '÷': Divide,
    xⁿ: DegreeY,
    'ⁿ√x': RootY,
    'x²': Degree2,
    'x³': Degree3,
    '√x': Root2,
    '∛x': Root3,
    'x!': Fact,
    '1/x': Inverse,
    '10ⁿ': TenDegreeX,
  };

  create(operandsArray) {
    const Operation = OperationFactory.list[this.operationId]; // Add
    const operation = new Operation(operandsArray, [
      this.operationSign,
      this.operationId,
      this.operationType,
    ]); // new Add

    return operation;
  }
}

export default OperationFactory;
