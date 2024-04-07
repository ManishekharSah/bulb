function toggleBulb() {
  var bulb = document.getElementById("bulb");
  bulb.classList.toggle("on");
}

function changeBrightness(value) {
  var bulb = document.getElementById("bulb");
  bulb.style.filter = "brightness(" + value / 100 + ")";
}

function changeColor(color) {
  var bulb = document.getElementById("bulb");
  bulb.style.backgroundColor = color;
}
