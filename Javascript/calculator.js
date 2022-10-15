var numberOne = "";
var numberTwo = "";
var symbolValue = "";
var equals = "";

var textOne = document.getElementById("text-1");
var resultID = document.getElementById("result");

function numberClick(number) {
  if (symbolValue == "") {
    numberOne += number;
  } else {
    numberTwo += number;
  }
  printTextOne();
}

function opt(symbol) {
  if (numberOne !== "") {
    symbolValue = symbol;
    printTextOne();
  }
}

function cRest() {
  textOne.innerHTML = "";
  numberOne = "";
  symbolValue = "";
  numberTwo = "";
  equals = "";
  resultID.value = 0;
}
function printTextOne() {
  textOne.innerHTML = numberOne + symbolValue + numberTwo + equals;
}

function result() {
  equals = "=";
  printTextOne();
  switch (symbolValue) {
    case "+":
      resultID.value = Number(numberOne) + Number(numberTwo);
      break;

    case "-":
      resultID.value = numberOne - numberTwo;
      break;
    case "/":
      resultID.value = numberOne / numberTwo;
      break;
    case "*":
      resultID.value = numberOne * numberTwo;
      break;
  }
}
