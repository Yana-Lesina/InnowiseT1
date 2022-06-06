import Calculator from './Calculator';

class HTMLDrawer {
  rootElement;
  calculatorWrapper;
  themeButton;

  screen;
  memoryInput;
  previousInput;
  recordInput;

  allButtonsWrapper;
  memoryButtonsWrapper;
  operationButtonsWrapper;

  constructor(rootElementId) {
    this.rootElement = document.getElementById(rootElementId);

    if (!this.rootElement) {
      throw new Error('Element with given ID not found');
    }
  }

  appendButtons() {
    for (let prop in Calculator.memoryOperations) {
      this.appendMemoryButton(prop, Calculator.memoryOperations[prop]);
    }

    this.appendOperationButton('x²', '^2', 'data-modify-operation');
    this.appendOperationButton('%', '', 'data-percent');
    this.appendOperationButton('CE', '', 'data-clear-entry');
    this.appendOperationButton('C', ' ', 'data-clear-all');
    this.appendOperationButton('undo', '', 'data-undo');

    this.appendOperationButton('x³', '^3', 'data-modify-operation');
    this.appendOperationButton('x!', '!', 'data-modify-operation');
    this.appendOperationButton('1/x', '^(-1)', 'data-modify-operation');
    this.appendOperationButton('10ⁿ', '10^', 'data-modify-operation');
    this.appendOperationButton('÷', '÷', 'data-calculate-operation');

    this.appendOperationButton('xⁿ', '^', 'data-calculate-operation');
    [7, 8, 9].forEach(num => {
      this.appendNumButton(num, 'data-num');
    });
    this.appendOperationButton('x', 'x', 'data-calculate-operation');

    this.appendOperationButton('√x', '√', 'data-modify-operation');
    [4, 5, 6].forEach(num => {
      this.appendNumButton(num, 'data-num');
    });
    this.appendOperationButton('-', '-', 'data-calculate-operation');

    this.appendOperationButton('∛x', '∛', 'data-modify-operation');
    [1, 2, 3].forEach(num => {
      this.appendNumButton(num, 'data-num');
    });
    this.appendOperationButton('+', '+', 'data-calculate-operation');

    this.appendOperationButton('ⁿ√x', 'ⁿ√', 'data-modify-operation');
    this.appendOperationButton('±', '', 'data-plus-minus');
    this.appendNumButton(0, 'data-num');
    this.appendNumButton('.', 'data-num');
    this.appendOperationButton('=', '', 'data-equal');
  }

  renderLayout() {
    this.themeButton = this.renderThemeButton('images/day-and-night1.png');

    this.calculatorWrapper = this.renderWrapper('calc');

    this.screen = this.renderScreen();

    this.allButtonsWrapper = this.renderWrapper('btns-wrapper');
    this.memoryButtonsWrapper = this.renderWrapper('m-btns');
    this.operationButtonsWrapper = this.renderWrapper('btns');

    this.allButtonsWrapper.appendChild(this.memoryButtonsWrapper);
    this.allButtonsWrapper.appendChild(this.operationButtonsWrapper);

    this.calculatorWrapper.appendChild(this.screen);
    this.calculatorWrapper.appendChild(this.allButtonsWrapper);

    this.appendButtons();
    this.addRightSidedColor();

    this.rootElement.appendChild(this.themeButton);
    this.rootElement.appendChild(this.calculatorWrapper);
  }

  renderScreen() {
    const screen = document.createElement('div');
    screen.classList.add('calc-screen');

    this.memoryInput = document.createElement('div');
    this.memoryInput.classList.add('mem-data-block');

    this.previousInput = document.createElement('div');
    this.previousInput.classList.add('prev-data-block');

    this.recordInput = document.createElement('div');
    this.recordInput.classList.add('record-data-block');
    this.recordInput.textContent = '0';

    screen.appendChild(this.memoryInput);
    screen.appendChild(this.previousInput);
    screen.appendChild(this.recordInput);

    return screen;
  }

  renderWrapper(className) {
    const wrapper = document.createElement('div');
    wrapper.classList.add(className);

    return wrapper;
  }

  renderThemeButton(imgLink) {
    const themeButton = document.createElement('div');
    themeButton.classList.add('btn', 'theme-btn');

    const themeImage = new Image();
    themeImage.classList.add('theme-img');
    themeImage.src = imgLink;

    themeImage.alt = 'day-night-theme';

    themeButton.appendChild(themeImage);
    return themeButton;
  }

  appendMemoryButton(value, className) {
    const button = document.createElement('div');

    button.classList.add('m-btn');
    button.dataset.type = className;
    button.textContent = value;

    this.memoryButtonsWrapper.appendChild(button);
  }

  appendNumButton(value, className) {
    const button = document.createElement('div');

    button.classList.add('btn', value);
    button.dataset.type = className;
    button.textContent = value;
    // button.style.gridArea = value;
    button.id = value;

    this.operationButtonsWrapper.appendChild(button);
  }

  appendOperationButton(value, sign = '', className) {
    const button = document.createElement('div');
    button.classList.add('btn', value);
    button.dataset.type = className;
    button.dataset.sign = sign;
    // button.style.gridArea = value;
    button.textContent = value;
    button.id = value;

    this.operationButtonsWrapper.appendChild(button);
  }

  changeTheme() {
    this.themeButton.addEventListener('click', () => {
      document.body.classList.toggle('night-theme');
    });
  }

  setTheme() {
    const currentTime = new Date().getHours();
    if (currentTime >= 21 && currentTime <= 4) {
      document.body.classList.add('night-theme');
    }
  }

  addRightSidedColor() {
    this.operationButtonsWrapper.querySelectorAll('.btn').forEach((btn, id) => {
      if ((id + 1) % 5 === 0) {
        btn.classList.add('right-sided-btn');
      }
    });
  }

  updateScreen(leftOperand, rightOperand) {
    this.previousInput.textContent = leftOperand;
    this.recordInput.textContent = rightOperand;
  }
  showCalculationResult(leftOperand, sign = '') {
    this.previousInput.textContent = `${leftOperand} ${sign}`;
    this.recordInput.textContent = '';
  }
  showModificationResult(leftOperand) {
    this.previousInput.textContent = `${leftOperand}`;
    this.recordInput.textContent = `${leftOperand}`;
  }
  showEqualResult() {}
}

export default HTMLDrawer;
