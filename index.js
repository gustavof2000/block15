let surveyObject = {
    firstName: "jake",
    lastname: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}
console.log(surveyObject);

surveyObject["email"] = "Jak3Smith1992@email.com";
surveyObject["phone"] = 3195551234;
surveyObject["zipCode"] = "63132";
surveyObject["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.log(surveyObject);

delete surveyObject.zipCode;
delete surveyObject.favoriteStore;

console.log(surveyObject);

surveyObject.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"],
surveyObject.futureFlavors = "mango",
surveyObject.todaysPurchaseCost = 5.32

console.log(surveyObject);

console.log(Object.keys(surveyObject));


