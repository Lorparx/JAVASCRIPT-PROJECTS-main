function full_sentence() {
    // This function demonstrates the use of string methods in JavaScript
    var part1 = "I have here a ";
    var part2 = "string of concatenated parts ";
    var part3 = "that together, form a complete sentence and ";
    var part4 = "are demonstrating string methods in JavaScript.";
    // Concatenate the strings
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}
function slice_method() {
    // This function demonstrates the use of the slice method
    var sentence = "There are no bad words for the coast today.";
    var section = sentence.slice(17, 22);  
    document.getElementById("slice").innerHTML = section;
}

// string method
function string_method() {
    var X = 144;
    document.getElementById("string").innerHTML = X.toString();
}

//toprecision method
function precision_method() {
    var Y = 9.87654321;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);
}