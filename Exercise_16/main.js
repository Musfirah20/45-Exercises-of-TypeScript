// Creating a Guest List Array
var guestList = ["Saman", "Anus", "Wania", "Salma"];
// Making variable for those guest who cant come
var dontCome = guestList[2];
// Print the name of guest who cant come
console.log(dontCome, "cantCome");
// Add or remove values from Guest List Array
guestList.splice(2, 1, "Maaz");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner.");
// Adding a new value at starting index of Array
guestList.unshift("Areeba");
// Adding a new value at ending index of Array
guestList.push("Amna");
// Get a middle index of our guest List Array 
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Amir");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a Invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me?")); });
