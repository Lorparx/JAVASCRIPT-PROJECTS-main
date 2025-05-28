function addNumbers() {
  return 5 + 3;
}

function subtractNumbers() {
  return 10 - 4;
}

function multiplyNumbers() {
  return 6 * 7;
}

function modulusNumbers() {
  return 17 % 5;
}

function incrementNumber() {
  let num = 8;
  num++;
  return num;
}

function decrementNumber() {
  let num = 12;
  num--;
  return num;
}

function randomNumber() {
  return Math.random().toFixed(2);
}

// Assign hover events to display results
document.getElementById("addition").addEventListener("mouseover", function() {
  this.innerText = "Result: " + addNumbers();
});

document.getElementById("subtraction").addEventListener("mouseover", function() {
  this.innerText = "Result: " + subtractNumbers();
});

document.getElementById("multiplication").addEventListener("mouseover", function() {
  this.innerText = "Result: " + multiplyNumbers();
});

document.getElementById("modulus").addEventListener("mouseover", function() {
  this.innerText = "Result: " + modulusNumbers();
});

document.getElementById("increment").addEventListener("mouseover", function() {
  this.innerText = "Result: " + incrementNumber();
});

document.getElementById("decrement").addEventListener("mouseover", function() {
  this.innerText = "Result: " + decrementNumber();
});

document.getElementById("random").addEventListener("mouseover", function() {
  this.innerText = "Result: " + randomNumber();
});
