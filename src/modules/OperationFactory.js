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
    add: Add,
    substract: Substract,
    mult: Mult,
    divide: Divide,
    'degree-y': DegreeY,
    'root-y': RootY,
    degree2: Degree2,
    degree3: Degree3,
    root2: Root2,
    root3: Root3,
    fact: Fact,
    inverse: Inverse,
    tenDegreeX: TenDegreeX,
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
