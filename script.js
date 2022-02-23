window.onload = () => {
  document.addEventListener('keydown', handleKeydown);
  
  const btnsDiv = document.querySelector('.btns-div');
}

let equation = '';
let prevNum = '';
let currNum = '';

let hasPi = false;
let operator = '';

let equalsPressed = false;

function handleKeydown(e) {
  switch (e.keyCode) {
    case (48):
      document.querySelectorAll('.num-btn')[0].click();
      break;
    case (49):
      document.querySelectorAll('.num-btn')[1].click();
      break;
    case (50):
      document.querySelectorAll('.num-btn')[2].click();
      break;
    case (51):
      document.querySelectorAll('.num-btn')[3].click();
      break;
    case (52):
      document.querySelectorAll('.num-btn')[4].click();
      break;
    case (53):
      document.querySelectorAll('.num-btn')[5].click();
      break;
    case (54):
      document.querySelectorAll('.num-btn')[6].click();
      break;
    case (55):
      document.querySelectorAll('.num-btn')[7].click();
      break;
    case (56):
      if (e.shiftKey) document.getElementById('multiply-btn').click();
      else document.querySelectorAll('.num-btn')[8].click();
      break;
    case (57):
      document.querySelectorAll('.num-btn')[9].click();
      break;

    case (8):
    case (46):
      document.getElementById('del-btn').click();
      break;

    case (80):
      document.getElementById('pi-btn');
      break;
    case (190):
      document.getElementById('decimal-btn').click();
      break;

    case (187):
      if (e.shiftKey) document.getElementById('plus-btn').click();
      else document.getElementById('equals-btn');
      break;
    case (189):
      document.getElementById('minus-btn').click();
    case (88):
      document.getElementById('multiply-btn').click();
      break;
    case (191):
      document.getElementById('divide-btn').click();
  }
}

function handleDelete() {
  currNum = currNum.slice(0,-1);
}

function addDecimalPoint() {
  if (!currNum.includes('.')) currNum += '.';
}

function addPi() {
  hasPi = true;
}

function handleEquals() {
  operate();
}

function chooseOperator(op) {
  if (operator === '') operator = op;
  else {
    if (prevNum !== '' && currNum !== '') operate();
    operator = op;
  }
}

function addNum(num) {
  if (!(num === 0 && (currNum === '' || currNum === '0'))) currNum += num;
}

function operate() {
  if (hasPi) currNum *= Math.PI;

  switch (operator) {
    case ('+'):
      prevNum = String(parseFloat(prevNum) + parseFloat(currNum));
      currNum = '';
      break;
    case ('-'):
      prevNum -= currNum;
      currNum = '';
      break;
    case ('x'):
      prevNum *= currNum;
      currNum = '';
      break;
    case ('÷'):
      prevNum /= currNum;
      currNum = '';
  }

  equation += ` ${operator} ${prevNum}`;
}
