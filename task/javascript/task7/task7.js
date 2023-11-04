function add() {
  let inputs = document.querySelectorAll(".inputNumber");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  const total = num1 + num2;
  document.getElementById("demo").innerHTML = "The result is:" + " " + total;
  demo.style.color="black";
}
function subtract() {
  let inputs = document.querySelectorAll(".inputNumber");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  const total = num1 - num2;
  document.getElementById("demo").innerHTML = "The result is:" + " " + total;
  demo.style.color="black";
}
function multiply() {
  let inputs = document.querySelectorAll(".inputNumber");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  const total = num1 * num2;
  document.getElementById("demo").innerHTML = "The result is:" + " " + total;
  demo.style.color="black";
}
function divide() {
  let inputs = document.querySelectorAll(".inputNumber");
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  if (num2 == 0) {
    document.getElementById("demo").innerHTML = "The number cannot be divided by zero";
    demo.style.color="red";
  } else {
    let total = num1 / num2;
    document.getElementById("demo").innerHTML = "The result is:" + " " + total;
    demo.style.color="black";
  }
}
