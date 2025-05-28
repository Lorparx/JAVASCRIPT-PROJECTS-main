// Create a dictionary with key value pairs of indie bands and their names abbreviated as keys.
const indieBands = {
    "TI": "Tame Impala",
    "AF": "Arcade Fire",
    "TS": "The Strokes",
    "VW": "Vampire Weekend",
    "FF": "Fleet Foxes",
    "AJ": "Alt-J",
    "TN": "The National",
    "MG": "MGMT",
    "CTE": "Cage the Elephant",
    "MM": "Modest Mouse",
    "DCFC": "Death Cab for Cutie",
    "PX": "Phoenix",
    "TSH": "The Shins",
    "INT": "Interpol",
    "FL": "Foals",
    "BH": "Beach House",
    "GB": "Grizzly Bear",
    "TDCC": "Two Door Cinema Club",
    "BI": "Bon Iver",
    "XX": "The xx"
};

delete indieBands["TI"]; // Remove Tame Impala from the dictionary

// Function to display the band name when hovering over the dictionary element
function displayBandName() {
    document.getElementById("Dictionary").innerHTML = "Result: " + indieBands["TI"];
}

// Assign hover event to display the band name
document.getElementById("Dictionary").addEventListener("mouseover", displayBandName);