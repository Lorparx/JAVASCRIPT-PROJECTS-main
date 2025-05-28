function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Random Number: ${randomNumber}`); // Display the random number in an alert
  }

  // Function to create a button element dynamically
  function createButton() {
    // Create a new button element
    const button = document.createElement('button');
    button.textContent = 'Click Me for Random Number'; // Set button text
    button.style.margin = '10px'; // Add some styling for spacing

    // Add an event listener to the button to call the generateRandomNumber function on click
    button.addEventListener('click', generateRandomNumber);

    // Append the button to the container div
    document.getElementById('container').appendChild(button);
  }

  // Function to create a paragraph element dynamically
  function createParagraph() {
    // Create a new paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Click the button above to generate a random number!'; // Set paragraph text
    paragraph.style.fontSize = '16px'; // Add some styling for readability

    // Append the paragraph to the container div
    document.getElementById('container').appendChild(paragraph);
  }

  // Call the functions to create the HTML elements when the script runs
  createParagraph();
  createButton();

// Basic Arithmetic Operations in JavaScript

// Addition (+)
function add(a, b) {
  return a + b;
}

// Subtraction (-)
function subtract(a, b) {
  return a - b;
}

// Multiplication (*)
function multiply(a, b) {
  return a * b;
}

// Modulus (%)
function modulus(a, b) {
  return a % b;
}

// Increment (++)
function increment(num) {
  return ++num;
}

// Decrement (--)
function decrement(num) {
  return --num;
}

// Event handlers
document.getElementById("addBtn").addEventListener("click", function() {
  alert("Addition: " + add(5, 3));
});

document.getElementById("subtractBtn").addEventListener("click", function() {
  alert("Subtraction: " + subtract(10, 4));
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
  alert("Multiplication: " + multiply(6, 7));
});

document.getElementById("modulusBtn").addEventListener("click", function() {
  alert("Modulus: " + modulus(10, 3));
});

document.getElementById("incrementBtn").addEventListener("click", function() {
  alert("Increment: " + increment(5));
});

document.getElementById("decrementBtn").addEventListener("click", function() {
  alert("Decrement: " + decrement(5));
});


  