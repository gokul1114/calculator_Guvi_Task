const num = document.querySelectorAll('.number')
const opp = document.querySelectorAll('.opp')
const equals = document.querySelector('.equals')
const dele = document.querySelector('.del')
const clr = document.querySelector('.clear')
const inputText1 = document.querySelector('.inputText1')
var inputText2 = document.querySelector('.inputText2')
var input1 ='';
var input2 = '';
var input = '';
var operation = '';

function clear() {
    input1 = ''
    input2 = ''
    operation = undefined
  }

function del() {
    input1 = input1.toString().slice(0, -1)
  }

function appendNumber(number) {
    if (number === '.' && input1.includes('.')) return;
    input1 = input1.toString() + number.toString();
    console.log(input1);
  }

function  chooseOperation(op) {
    if (input1 === '') return
    if (input2 !== '') {
       calculate()
    }
    operation = op;
    input2 = input1;
    input1 = ''
  }

function calculate() {
    let result
    const in1 = parseFloat(input2)
    const in2 = parseFloat(input1)
    if (isNaN(in1) || isNaN(in2)) return
    switch (operation) {
      case '+':
        result = in1 + in2
        break
      case '-':
        result = in1 - in2
        break
      case '*':
        result = in1 * in2
        break
      case '/':
        console.log("division")
        result = in1/in2
        break
      default:
        return
    }
    input1 = result
    operation = undefined
    input2 = ''
  }

  function getDisplayNumber(number) {
    console.log(input1);
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
     //console.log(`${integerDisplay}.${decimalDigits}`);
     return integerDisplay+"."+decimalDigits;
    } else {
      console.log(integerDisplay);  
      return integerDisplay
    }
  }

  function  updateDisplay() {
    inputText2.innerText = getDisplayNumber(input1)
    if (operation != null) {
         inputText1.innerText =
        `${getDisplayNumber(input2)} ${operation}`
    } else {
         inputText1.innerText = ''
    }
  }


num.forEach(e => {
    e.addEventListener('click', () => {
      appendNumber(e.innerText)
      updateDisplay()
    })
  })
   
opp.forEach(e => {
    e.addEventListener('click', () => {
      chooseOperation(e.innerText)
      updateDisplay()
    })
  })
  
equals.addEventListener('click', e => {
    calculate()
    updateDisplay()
  })
  
clr.addEventListener('click', e => {
    clear()
    updateDisplay()
  })
  
dele.addEventListener('click', e => {
    del()
    updateDisplay()
  })

