var userNames = ["Maham", "Ali", "Moiz", "Admin", "Sania"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is epmty we need to find some users!");
}
else {
    // Using ForEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
        }
    });
}
