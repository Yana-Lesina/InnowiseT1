import { Add, Substract, Mult, Divide } from './simpleCommands';
import Degree2 from './Degree2';
import Degree3 from './Degree3';
import DegreeY from './DegreeY';
import Root2 from './Root2';
import Root3 from './Root3';
import RootY from './RootY';
import Fact from './Fact';
import Inverse from './Inverse';
import TenDegreeX from './TenDegreeX';

class OperationFactory {
  constructor(sign = '') {
    this.sign = sign;
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

  create(num, operType) {
    const Operation = OperationFactory.list[operType]; // Add
    const oper = new Operation(num); // new Add
    oper.sign = this.sign;
    return oper;
  }
}

export default OperationFactory;
