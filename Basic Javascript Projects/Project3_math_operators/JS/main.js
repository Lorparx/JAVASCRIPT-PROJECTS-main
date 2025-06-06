// This JavaScript code performs basic arithmetic operations and displays the results on hover.
// Addition
function addNumbers() {
  return 5 + 3;
}
//  Subtraction
function subtractNumbers() {
  return 10 - 4;
}
// Multiplication
function multiplyNumbers() {
  return 6 * 7;
}
// Modulus
function modulusNumbers() {
  return 17 % 5;
}
// Increment
function incrementNumber() {
  let num = 8;
  num++;
  return num;
}
// Decrement
function decrementNumber() {
  let num = 12;
  num--;
  return num;
}
// Random Number
function randomNumber() {
  return Math.random().toFixed(2);
}

// Assign hover events to display results for addition
document.getElementById("addition").addEventListener("mouseover", function() {
  this.innerText = "Result: " + addNumbers();
});
// Assign hover events to display results for subtraction, multiplication, modulus, increment, decrement, and random number
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
