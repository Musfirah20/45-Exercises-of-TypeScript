let guestList = ["Haris", "Shumaila", "Subhan", "Hamna"];

let dontCome = guestList[1];

console.log(dontCome, "cantCome");

guestList.splice(1, 1, "sara");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to Dinner with me?`));