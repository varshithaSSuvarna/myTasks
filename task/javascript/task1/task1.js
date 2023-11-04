function evenodd() {
  let num =document.getElementById("inputNumber").value.trim();
  if (num === "")  {
    document.getElementById("demo").innerHTML = "Enter the number";
    demo.style.color="red";
  } else if (isNaN(num)) {
    document.getElementById("demo").innerHTML = "invalid number";
    demo.style.color="red";
  } else if (num % 2 === 0) {
    document.getElementById("demo").innerHTML = "Number is even";
    demo.style.color="black";
  } else {
    document.getElementById("demo").innerHTML = "Number is odd";
    demo.style.color="black";
  }
}
