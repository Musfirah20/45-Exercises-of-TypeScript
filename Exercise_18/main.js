var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries ans Print its orignal order
var countriestoVisit = ["China", "Dubai", "Brazil", "Canada"];
console.log("orignal order:", countriestoVisit);
// Print the Array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order:", __spreadArray([], countriestoVisit, true).sort());
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
