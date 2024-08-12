const prompt = require('prompt-sync')();

// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let restaurant = {
  name: "Gotham Pizza",
  cuisine: "Italian",
  rating: 10
};

// Console log the restaurant's name using the object
console.log("Restaurant name:", restaurant.name);

// Add a new key called location and add the restaurant's location
restaurant.location = "852 8th avenue";

// Change the rating of the restaurant to increase it by one
restaurant.rating++;

// Add a new key called test and set the value to null
restaurant.test = null;

// Delete the test key
delete restaurant.test;

// Console log the object to see if the test key is gone
console.log("Restaurant object after deleting 'test' key:", restaurant);

// Loop through the object and print every key and element.
for (let key in restaurant) {
  console.log(`${key} is ${restaurant[key]}`);
}


