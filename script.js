window.onload = () => {
  const btnsDiv = document.querySelector('.btns-div');

  const acBtn = document.getElementById('ac-btn');
  const delBtn = document.getElementById('del-btn');

  const percentBtn = document.getElementById('percent-btn');
  const decimalBtn = document.getElementById('decimal-btn');

  const plusBtn = document.getElementById('plus-btn');
  const minusBtn = document.getElementById('minus-btn');
  const multiplyBtn = document.getElementById('multiply-btn');
  const divideBtn = document.getElementById('divide-btn');
  
  const equalsBtn = document.getElementById('equals-btn');

  const historyClearBtn = document.getElementById('history-clear-btn');

  //btnsDiv.addEventListener('click', updateDisplay);

  acBtn.addEventListener('click', handleClear);
  delBtn.addEventListener('click', handleDelete);

  percentBtn.addEventListener('click', handlePercent);
  decimalBtn.addEventListener('click', addDecimalPoint);

  plusBtn.addEventListener('click', chooseOperator);
  minusBtn.addEventListener('click', chooseOperator);
  multiplyBtn.addEventListener('click', chooseOperator);
  divideBtn.addEventListener('click', chooseOperator);

  equalsBtn.addEventListener('click', operate);

  historyClearBtn.addEventListener('click', handleClearHistory);

  const numBtns = document.querySelectorAll('.num-btn');

  for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', addNum);
  }

  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('keyup', handleKeyup);
}

let equation = '';
let prevNum = '';
let currNum = '';

let operator = '';

function handleKeydown(e) {
  e.preventDefault();

  switch (e.keyCode) {
    case (48):
      document.getElementById('num0-btn').click();
      document.getElementById('num0-btn').classList.add('calc-btn-active');
      break;
    case (49):
      document.getElementById('num1-btn').click();
      document.getElementById('num1-btn').classList.add('calc-btn-active');
      break;
    case (50):
      document.getElementById('num2-btn').click();
      document.getElementById('num2-btn').classList.add('calc-btn-active');
      break;
    case (51):
      document.getElementById('num3-btn').click();
      document.getElementById('num3-btn').classList.add('calc-btn-active');
      break;
    case (52):
      document.getElementById('num4-btn').click();
      document.getElementById('num4-btn').classList.add('calc-btn-active');
      break;
    case (53):
      if (e.shiftKey) {
        document.getElementById('percent-btn').click();
        document.getElementById('percent-btn').classList.add('calc-btn-active');
      }
      document.getElementById('num5-btn').click();
      document.getElementById('num5-btn').classList.add('calc-btn-active');
      break;
    case (54):
      document.getElementById('num6-btn').click();
      document.getElementById('num6-btn').classList.add('calc-btn-active');
      break;
    case (55):
      document.getElementById('num7-btn').click();
      document.getElementById('num7-btn').classList.add('calc-btn-active');
      break;
    case (56):
      if (e.shiftKey) {
        document.getElementById('multiply-btn').click();
        document.getElementById('multiply-btn').classList.add('calc-btn-active');
      }
      else {
        document.getElementById('num8-btn').click();
        document.getElementById('num8-btn').classList.add('calc-btn-active');
      }
      break;
    case (57):
      document.getElementById('num9-btn').click();
      document.getElementById('num9-btn').classList.add('calc-btn-active');
      break;

    case (8):
    case (46):
      document.getElementById('del-btn').click();
      document.getElementById('del-btn').classList.add('calc-btn-active');
      break;

    case (80):
      document.getElementById('percent-btn').click();
      document.getElementById('percent-btn').classList.add('calc-btn-active');
      break;

    case (190):
      document.getElementById('decimal-btn').click();
      document.getElementById('decimal-btn').classList.add('calc-btn-active');
      break;

    case (187):
      if (e.shiftKey) {
        document.getElementById('plus-btn').click();
        document.getElementById('plus-btn').classList.add('calc-btn-active');
      }
      else {
        document.getElementById('equals-btn').click();
        document.getElementById('equals-btn').classList.add('calc-btn-active');
      }
      break;
    case (189):
      document.getElementById('minus-btn').click();
      document.getElementById('minus-btn').classList.add('calc-btn-active');
      break;
    case (88):
      document.getElementById('multiply-btn').click();
      document.getElementById('multiply-btn').classList.add('calc-btn-active');
      break;
    case (191):
      document.getElementById('divide-btn').click();
      document.getElementById('divide-btn').classList.add('calc-btn-active');
      break;
    
    case (13):
      document.getElementById('equals-btn').click();
      document.getElementById('equals-btn').classList.add('calc-btn-active');
  }
}

function handleKeyup(e) {
  e.preventDefault();

  switch (e.keyCode) {
    case (48):
      document.getElementById('num0-btn').classList.remove('calc-btn-active');
      break;
    case (49):
      document.getElementById('num1-btn').classList.remove('calc-btn-active');
      break;
    case (50):
      document.getElementById('num2-btn').classList.remove('calc-btn-active');
      break;
    case (51):
      document.getElementById('num3-btn').classList.remove('calc-btn-active');
      break;
    case (52):
      document.getElementById('num4-btn').classList.remove('calc-btn-active');
      break;
    case (53):
      if (e.shiftKey) document.getElementById('percent-btn').classList.remove('calc-btn-active');
      document.getElementById('num5-btn').classList.remove('calc-btn-active');
      break;
    case (54):
      document.getElementById('num6-btn').classList.remove('calc-btn-active');
      break;
    case (55):
      document.getElementById('num7-btn').classList.remove('calc-btn-active');
      break;
    case (56):
      if (e.shiftKey) document.getElementById('multiply-btn').classList.remove('calc-btn-active');
      else document.getElementById('num8-btn').classList.remove('calc-btn-active');
      break;
    case (57):
      document.getElementById('num9-btn').classList.remove('calc-btn-active');
      break;

    case (8):
    case (46):
      document.getElementById('del-btn').classList.remove('calc-btn-active');
      break;

    case (80):
      document.getElementById('percent-btn').classList.remove('calc-btn-active');
      break;

    case (190):
      document.getElementById('decimal-btn').classList.remove('calc-btn-active');
      break;

    case (187):
      if (e.shiftKey) document.getElementById('plus-btn').classList.remove('calc-btn-active');
      else document.getElementById('equals-btn').classList.remove('calc-btn-active');
      break;
    case (189):
      document.getElementById('minus-btn').classList.remove('calc-btn-active');
      break;
    case (88):
      document.getElementById('multiply-btn').classList.remove('calc-btn-active');
      break;
    case (191):
      document.getElementById('divide-btn').classList.remove('calc-btn-active');
      break;
    
    case (13):
      document.getElementById('equals-btn').classList.remove('calc-btn-active');
  }
}

function updateDisplay() {
  if (currNum === '') currNum = '0';
  console.log(equation + ' , ' + currNum);

  document.querySelector('.equation-display').textContent = equation;
  document.querySelector('.curr-display').textContent = currNum;
}

function handleClear() {
  console.log('cleared');
  equation = '';
  prevNum = '';
  currNum = '0';

  operator = '';
  
  updateDisplay();
}

function handleDelete() {
  currNum = currNum.slice(0,-1);

  updateDisplay();
}

function handlePercent() {
  currNum = String(currNum / 100);

  updateDisplay();

  operate();
}

function addDecimalPoint() {
  if (!currNum.includes('.')) {
    currNum += '.';

    updateDisplay();
  }
}

function chooseOperator(e) {
  op = e.target.textContent;

  if (operator === '') {
    if (equation === '') equation += ` ${currNum}`;

    prevNum = currNum;
    currNum = '';

    operator = op;

    equation += ` ${op}`;

    updateDisplay();
  }
  else {
    if (prevNum !== '' && currNum !== '0') {
      operate();

      if (equation === '') equation += ` ${currNum}`;

      prevNum = currNum;
      currNum = '';

      operator = op;

      equation += ` ${op}`;
    }
    else {
      equation = equation.slice(0,-1);
      operator = op;

      equation += ` ${op}`;

      updateDisplay();
    }
  }
}

function addNum(e) {
  num = e.target.textContent;

  if (currNum.length <= 16) {
    if (currNum === '0') {
      if (num !== '0') {
        currNum = num;
      }
    } else currNum += num;
    updateDisplay();
  }
}

function operate() {
  equation += ` ${currNum}`;

  switch (operator) {
    case ('+'):
      currNum = String(parseFloat(prevNum) + parseFloat(currNum));
      prevNum = '';
      break;
    case ('-'):
      currNum = String(prevNum - currNum);
      prevNum = '';
      break;
    case ('x'):
      currNum = String(prevNum * currNum);
      prevNum = '';
      break;
    case ('÷'):
      currNum = String(prevNum / currNum);
      prevNum = '';
  }

  operator = '';

  if (currNum.length > 16) currNum = String(parseFloat(currNum).toExponential(2));

  equation += ` = ${currNum}`;

  const li = document.createElement('li');
  li.textContent = equation;

  document.querySelector('.history-ul').prepend(li);

  updateDisplay();

  equation = '';
}

function handleClearHistory() {
  const historyUl = document.querySelector('.history-ul');

  while (historyUl.lastElementChild) {
    historyUl.removeChild(historyUl.lastElementChild);
  }
}
