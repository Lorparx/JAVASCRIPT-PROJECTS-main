// This JavaScript file contains functions that demonstrate the use of loops and arrays
// Function that utilizes a while loop
function whileLoopFunction() {
    let count = 1;
    let result = "";
    while (count < 5) {
        result += `Count: ${count} <br>`;
        count++;
    }
    document.getElementById("output").innerHTML = result;
}

// Function that utilizes a for loop
function forLoopFunction() {
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += `Iteration: ${i} <br>`;
    }
    document.getElementById("output1").innerHTML = result;
}

// Function that utilizes an array
function arrayFunction() {
    let fruits = ["Apple", "Banana", "Cherry", "Date"];
    let result = "Fruits: " + fruits.join(", ");
    document.getElementById("output2").innerHTML = result;
}

// Create an object using the “let” keyword
let person = {
    name: "Laura",
    age: 36,
    city: "Portland"
};

// Function to display object properties in HTML
function displayObject() {
    let result = `Name: ${person.name} <br> Age: ${person.age} <br> City: ${person.city}`;
        document.getElementById("output3").innerHTML = result;
    }
