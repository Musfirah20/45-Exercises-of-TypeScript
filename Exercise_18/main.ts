// Making a Array of Countries ans Print its orignal order
let countriestoVisit: string[] = ["China", "Dubai", "Brazil", "Canada"];
console.log("orignal order:", countriestoVisit);

// Print the Array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order:",[...countriestoVisit].sort());

// Show that the Array is still in its Orignal order
console.log("Still in Orignal Order:", countriestoVisit);

// Print the Array in Reversed Order without modifying the actual Array list
console.log("Reverse Order:", [countriestoVisit].reverse());

// Show that the Array is still in its Orignal order
console.log("Still in Orignal Order:", countriestoVisit);

// We have changed the Orignal Array order now
console.log("Orignal Array Reversed:", countriestoVisit.reverse());

// Print the Array to show that its back to its Orignal order
console.log("Back to Orignal Order:", countriestoVisit.reverse());

// Print the Array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriestoVisit.sort());

// We have Changed again the Orignal Array order Now in reverse order again
console.log("Orignal Array Reversed Again:", countriestoVisit.reverse());