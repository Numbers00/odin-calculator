window.onload = () => {
  const calcBtns = document.querySelectorAll('.calc-btn');
  const ctrlBtns = document.querySelector('.ctrl-btns');
  const operatorBtns = document.querySelectorAll('.operator-btn');
  const addonBtns = document.querySelectorAll('.addon-btn');
  const numBtns = document.querySelectorAll('.num-btn');

  for (let btn in calcBtns) {
    calcBtns[btn].addEventListener('keydown', handleKeydown);
  }
}

let prevNum = '';
let currNum = '';

let addon = '';
let operator = '';

let equalsPressed = false;

function handleKeydown(e) {
  switch (e.keyCode) {
    case (48):
      currNum += '0';
      break;
    case (49):
      currNum += '1';
      break;
    case (50):
      currNum += '2';
      break;
    case (51):
      currNum += '3';
      break;
    case (52):
      currNum += '4';
      break;
    case (53):
      currNum += '5';
      break;
    case (54):
      currNum += '6';
      break;
    case (55):
      currNum += '7';
      break;
    case (56):
      if (e.shiftKey) operator = 'x';
      else currNum += '8';
      break;
    case (57):
      currNum += '9';
      break;

    case (8):
    case (46):
      currNum = currNum.slice(0,-1);
      break;

    case (80):
      addon = Math.PI;
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
