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
      if (e.shiftKey) operator = 'x';
      else document.querySelectorAll('.num-btn')[8].click();
      break;
    case (57):
      document.querySelectorAll('.num-btn')[9].click();
      break;

    case (8):
    case (46):
      currNum = currNum.slice(0,-1);
      break;

    case (80):
      hasPi = true;
      break;
    case (190):
      if (!currNum.includes('.')) currNum += '.';
      break;

    case (187):
      if (e.shiftKey) operator = '+';
      else equalsPressed = true;
      break;
    case (189):
      operator = '-';
    case (88):
      operator = 'x';
      break;
    case (191):
      operator = '÷';
  }
}

function addNum(num) {
  if (!(num === 0 && (currNum === '' || currNum === '0'))) currNum += num;
}

function chooseOperator(op) {
  if (operator === '') operator = op;
  else {
    if (prevNum !== '' && currNum !== '') operate();
    operator = op;
  }
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
