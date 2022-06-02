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
    themeButton.classList.add('btn', 'theme-btn', 'day-theme-orange');

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

    button.classList.add('btn', 'day-theme-gray', value);
    button.dataset.type = className;
    button.textContent = value;
    // button.style.gridArea = value;
    button.id = value;

    this.operationButtonsWrapper.appendChild(button);
  }

  appendOperationButton(value, sign = '', className) {
    const button = document.createElement('div');
    button.classList.add('btn', 'day-theme-gray', value);
    button.dataset.type = className;
    button.dataset.sign = sign;
    // button.style.gridArea = value;
    button.textContent = value;
    button.id = value;

    this.operationButtonsWrapper.appendChild(button);
  }

  changeTheme() {
    this.themeButton.addEventListener('click', () => {
      const background = document.body;
      const buttons = document.querySelectorAll('.btn');

      if (background.classList.contains('day-theme-gray')) {
        background.classList.remove('day-theme-gray');
        background.classList.add('night-theme-gray');

        buttons.forEach(button => {
          if (button.classList.contains('day-theme-gray')) {
            button.classList.remove('day-theme-gray');
            button.classList.add('night-theme-gray');
          } else {
            button.classList.remove('day-theme-orange');
            button.classList.add('night-theme-blue');
          }
        });
      } else {
        background.classList.remove('night-theme-gray');
        background.classList.add('day-theme-gray');

        buttons.forEach(button => {
          if (button.classList.contains('night-theme-gray')) {
            button.classList.remove('night-theme-gray');
            button.classList.add('day-theme-gray');
          } else {
            button.classList.remove('night-theme-blue');
            button.classList.add('day-theme-orange');
          }
        });
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
