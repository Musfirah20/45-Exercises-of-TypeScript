// Creating a Guest List Array
let guestList = ["Saman", "Anus", "Wania", "Salma"];

// Making variable for those guest who cant come
let dontCome = guestList[2];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Amir");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a Invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me?`)); 

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the Array until only two names remmain
while(guestList.length > 2){
    let removedguest = guestList.pop();
    console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guests on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);