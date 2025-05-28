// typeof operator example
let myVariable = 42;
document.write("The data type of myVariable is: " + typeof myVariable);

// type coercion example
let number = 10;
let text = "<br>The result is: ";
document.write(text + number); // Outputs: "The result is: 10"

// Setting up values for comparison
let a = 10;
let b = "10";
let c = 20;
let d = false;

// Comparison operators
document.write("<br>10 == '10' : " + (a == b) + "<br>"); // true (loose equality)
document.write("10 === '10' : " + (a === b) + "<br>"); // false (strict equality)
document.write("20 > 10 : " + (c > a) + "<br>"); // true
document.write("10 < 20 : " + (a < c) + "<br>"); // true

// Logical operators
document.write("10 > 5 && 20 > 15 : " + (a > 5 && c > 15) + "<br>"); // true
document.write("10 > 15 || 20 > 15 : " + (a > 15 || c > 15) + "<br>"); // true
document.write("!false : " + (!d) + "<br>"); // true (negation of false)

