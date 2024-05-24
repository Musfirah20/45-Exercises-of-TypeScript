var guestList = ["Haris", "Shumaila", "Subhan", "Hamna"];
var dontCome = guestList[1];
console.log(dontCome, "cantCome");
guestList.splice(1, 1, "sara");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to Dinner with me?")); });
