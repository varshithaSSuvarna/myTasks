let bulbs = document.querySelectorAll(".bulbColor");
let colors = ["pink", "red", "blue", "green"];
let currentIndex = 0;

function startColorChange() {
  setInterval(() => {
    bulbs.forEach((bulb, bulbIndex) => {
      const nextIndex = (currentIndex + bulbIndex) % colors.length;
      bulb.style.backgroundColor = colors[nextIndex];
    });
    currentIndex = (currentIndex + 1) % colors.length;
  }, 500);
}

