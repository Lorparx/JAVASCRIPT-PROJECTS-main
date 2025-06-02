//global variable
var X = 13;
function Add_numbers_1() {
   document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//local variable
function Add_numbers_3() {
    var Y = 45; //local variable
    document.write(Y + 20 + "<br>");
}
function Add_numbers_4() {
    var Y = 100; //local variable added to fix the error
    //document.write(Y + 200 + "<br>"); // This line was causing an error because Y was not defined in this scope
    document.write(Y + 200 + "<br>");
}
// first if statement in a function, else ifs added to complete the function before i knew about the time function assignment
function get_Date() {
    if (new Date().getHours() < 11) {
        document.getElementById("Method").innerHTML = "good morning!";
    } else if (new Date().getHours() < 18) {
        document.getElementById("Method").innerHTML = "good afternoon!";
    } else if (new Date().getHours() < 24) {
        document.getElementById("Method").innerHTML = "good evening!";
    }
}
// Time function with if, else if, and else statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12) {
        Reply = "It is morning time!";
    } else if (Time > 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}