let time = new Date();
let hour = 24;
let suffix;
if (hour >= 12 && hour < 16) {
  suffix = "Good  Afternoon  Varsh!";
} else if (hour >= 16 && hour < 23) {
  suffix = "Good  Evening  Varsh!";
} else {
  suffix = "Good  Morning  Varsh!";
}
document.getElementById("demo").innerHTML = suffix + " "+"Welcome to our website";
