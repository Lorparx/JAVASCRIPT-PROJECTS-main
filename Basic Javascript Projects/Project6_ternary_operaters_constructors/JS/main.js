// This code is for a simple JavaScript project that demonstrates the use of ternary operators, constructors, and functions.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; 
}
// New and this constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");
// Functions display constructor function results
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
    " manufactured in " + Eric.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
}
// Nested function example
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}