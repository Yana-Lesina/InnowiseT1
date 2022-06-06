class Instrument {
  constructor(calc) {
    this.calc = calc;
  }

  execute() {
    throw new Error('Execute method is not implemented');
  }
}

export default Instrument;
