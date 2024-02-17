// const personName: string = "Hassan";

// console.log(`Hello ${personName}, would you like to learn some Python today?`);


// Ques 2
// const personName: string = "Hassan";


// console.log("Lowercase:", personName.toLowerCase());


// console.log("Uppercase:", personName.toUpperCase());


// console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());


// Ques 3
// const quote: string = "A person who never made a mistake never tried anything new.";
// const author: string = "Albert Einstein";

// console.log(`${author} once said, "${quote}"`);

// #4
// const quote: string = "A person who never made a mistake never tried anything new.";
// const famous_person: string = "Albert Einstein";


// const message: string = `${famous_person} once said, "${quote}"`;


// console.log(message);


// #5
// const personName: string = "\t\n   Hassan Ahmad   \n\t";


// console.log("Name with whitespace:", personName);


// const strippedName: string = personName.trim();


// console.log("Stripped name:", strippedName);

//Q 6
// Add
// const additionResult: number = 5 + 3;
// console.log("Addition:", additionResult);

// // Subtract
// const subtractionResult: number = 10 - 2;
// console.log("Subtraction:", subtractionResult);

// // Multiply
// const multiplicationResult: number = 4 * 2;
// console.log("Multiplication:", multiplicationResult);

// // Divide
// const divisionResult: number = 16 / 2;
// console.log("Division:", divisionResult);

//#8

// const favoriteNumber: number = 136;


// const message: string = `My favorite number is ${favoriteNumber}.`;

// console.log(message);

//#9
// Program: favoriteNumber.ts
// Author: [Your Name]
// Date: [Current Date]
// Description: This program reveals the author's favorite number.

// Store your favorite number in a variable
// const favoriteNumber: number = 136;

// // Create a message revealing your favorite number
// const message: string = `My favorite number is ${favoriteNumber}.`;

// // Print the message
// console.log(message);


//#10

// const names: string[] = ["Ali", "Waqas", "Atta", "Hassan"];


// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//#11
// Store the names of your friends in an array called names
// const names: string[] = ["Ali", "Waqas", "Atta", "Hassan"];

// // Print a personalized message to each person in the array
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}! Have a great day!`);
// }


//#12
// Define an array of favorite modes of transportation
// const transportation: string[] = ["seventy", "civic", "cycle", "train"];

// // Print statements about each item in the array
// for (let i = 0; i < transportation.length; i++) {
//     console.log(`I would like to own a ${transportation[i]}.`);
// }
  

// #14
// const guestList: string[] = ["Hassan", "Ahmad", "Siddiqui"];


// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);
// }

// //15
// // Define the original guest list
// let guestList: string[] = ["Ali", "Waqas", "Atta"];

// // Print the original guest list
// console.log("Original guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Remove the guest who can't make it
// const guestCantMakeIt: string = "Waqas";
// guestList = guestList.filter(guest => guest !== guestCantMakeIt);

// // Add a new guest
// const newGuest: string = "Shahid";
// guestList.push(newGuest);

// // Print the updated guest list
// console.log("\nUpdated guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print new invitation messages
// console.log(`\nDear ${guestList[0]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[1]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

//16
// [// Define the original guest list
// let guestList: string[] = ["Ali", "Waqas", "Atta"];

// // Print the original guest list
// console.log("Original guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Inform about the bigger dinner table
// console.log("\nGood news! We found a bigger dinner table!");

// // Add a new guest to the beginning of the array
// const newGuestBeginning: string = "Muzzamil";
// guestList.unshift(newGuestBeginning);

// // Add a new guest to the middle of the array
// const newGuestMiddle: string = "Ahmed";
// const middleIndex: number = Math.floor(guestList.length / 2);
// guestList.splice(middleIndex, 0, newGuestMiddle);

// // Add a new guest to the end of the array
// const newGuestEnd: string = "Majeed";
// guestList.push(newGuestEnd);

// // Print the updated guest list
// console.log("\nUpdated guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print new invitation messages
// console.log(`\nDear ${guestList[0]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[1]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[2]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[3]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[4]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[5]},\nYou are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);


//17
// // Define the original guest list
// let guestList: string[] = ["Ali", "Waqas", "Atta", "Muzzamil", "Ahmed", "Albert Einstein"];

// // Print the original guest list
// console.log("Original guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print a message indicating only two people can be invited
// console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// // Remove guests from the list until only two names remain
// while (guestList.length > 2) {
//     const removedGuest: string = guestList.pop()!;
//     console.log(`\nSorry, ${removedGuest}, we're unable to invite you to dinner.`);
// }

// // Print invitation messages to the two remaining guests
// console.log(`\nDear ${guestList[0]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\n[Your Name]`);

// console.log(`\nDear ${guestList[1]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\n[Your Name]`);

// // Remove the last two names from the list
// guestList.pop();
// guestList.pop();

// // Print the empty list
// console.log("\nUpdated guest list:");
// console.log(guestList);

//17
// // Define the original guest list
// let guestList: string[] = ["Ali", "Waqas", "Atta", "Muzzamil", "Ahmed", "Majeed"];

// // Print the original guest list
// console.log("Original guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print a message indicating only two people can be invited
// console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// // Remove guests from the list until only two names remain
// while (guestList.length > 2) {
//     const removedGuest: string = guestList.pop()!;
//     console.log(`\nSorry, ${removedGuest}, we're unable to invite you to dinner.`);
// }

// // Print invitation messages to the two remaining guests
// console.log(`\nDear ${guestList[0]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[1]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// // Remove the last two names from the list
// guestList.pop();
// guestList.pop();

// // Print the empty list
// console.log("\nUpdated guest list:");
// console.log(guestList);

// // #18
// // Define an array of places to visit
// let placesToVisit: string[] = ["Makkah", "Madina", "Turkey", "Phi Phi island", "Thailand"];

// // Print the original array
// console.log("Original order:");
// console.log(placesToVisit);

// // Print the array in alphabetical order without modifying the actual list
// console.log("\nAlphabetical order (without modifying original list):");
// console.log([...placesToVisit].sort());

// // Show that the array is still in its original order
// console.log("\nOriginal order after sorting:");
// console.log(placesToVisit);

// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("\nReverse alphabetical order (without modifying original list):");
// console.log([...placesToVisit].sort().reverse());

// // Show that the array is still in its original order
// console.log("\nOriginal order after reverse sorting:");
// console.log(placesToVisit);

// // Reverse the order of the list
// placesToVisit = placesToVisit.reverse();
// console.log("\nReversed order:");
// console.log(placesToVisit);

// // Reverse the order of the list again to get back to the original order
// placesToVisit = placesToVisit.reverse();
// console.log("\nBack to original order:");
// console.log(placesToVisit);

// // Sort the array in alphabetical order
// placesToVisit.sort();
// console.log("\nSorted in alphabetical order:");
// console.log(placesToVisit);

// // Sort the array in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("\nSorted in reverse alphabetical order:");
// console.log(placesToVisit);

// // #19
// // Define the original guest list
// let guestList: string[] = ["Ali", "Waqas", "Atta", "Muzzamil", "Ahmed", "Majeed"];

// // Print the number of people invited to dinner
// console.log(`Number of people invited to dinner: ${guestList.length}`);

// // Print the original guest list
// console.log("\nOriginal guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print a message indicating only two people can be invited
// console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// // Remove guests from the list until only two names remain
// while (guestList.length > 2) {
//     const removedGuest: string = guestList.pop()!;
//     console.log(`\nSorry, ${removedGuest}, we're unable to invite you to dinner.`);
// }

// // Print the updated guest list
// console.log("\nUpdated guest list:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i]);
// }

// // Print invitation messages to the two remaining guests
// console.log(`\nDear ${guestList[0]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// console.log(`\nDear ${guestList[1]},\nYou are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.\nSincerely,\nHassan.AS`);

// // Remove the last two names from the list
// guestList.pop();
// guestList.pop();

// // Print the empty list
// console.log("\nUpdated guest list:");
// console.log(guestList);

// 20
// // Create an array of countries
// const countries: string[] = ["USA", "Canada", "United Kingdom", "France", "Germany", "Japan", "Australia", "Brazil", "China", "India"];

// // Print the array of countries
// console.log("List of countries:");
// console.log(countries);

// //21
// // Create TypeScript objects representing cars
// const car1: { brand: string, model: string, year: number, color: string } = {
//     brand: "Toyota",
//     model: "Crown",
//     year: 2020,
//     color: "Silver"
// };

// const car2: { brand: string, model: string, year: number, color: string } = {
//     brand: "Honda",
//     model: "Civic",
//     year: 2010,
//     color: "Black"
// };

// const car3: { brand: string, model: string, year: number, color: string } = {
//     brand: "Ford",
//     model: "Mustang",
//     year: 2022,
//     color: "Red"
// };

// // Print information about the cars
// console.log("Car 1:");
// console.log(car1);
// console.log("\nCar 2:");
// console.log(car2);
// console.log("\nCar 3:");
// console.log(car3);

// // 22
// // Create TypeScript objects representing cars
// const car1: { brand: string, model: string, year: number, color: string } = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "Silver"
// };

// const car2: { brand: string, model: string, year: number, color: string } = {
//     brand: "Honda",
//     model: "Civic",
//     year: 2019,
//     color: "Blue"
// };

// const car3: { brand: string, model: string, year: number, color: string } = {
//     brand: "Ford",
//     model: "Mustang",
//     year: 2022,
//     color: "Red"
// };

// // Attempt to access a car object that doesn't exist (using an out-of-range index)
// console.log("Car 4:");
// console.log(car4); // Intentional error: car4 is not defined

// // Print information about the cars
// console.log("\nCar 1:");
// console.log(car1);
// console.log("\nCar 2:");
// console.log(car2);
// console.log("\nCar 3:");
// console.log(car3);

// // 23

// let car: string = 'subaru';

// // Test 1: Is car equal to 'subaru'?
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// // Test 2: Is car equal to 'toyota'?
// console.log("Is car == 'toyota'? I predict False.");
// console.log(car == 'toyota');

// // Test 3: Is car not equal to 'honda'?
// console.log("Is car != 'honda'? I predict True.");
// console.log(car != 'honda');

// // Test 4: Is car length equal to 6?
// console.log("Is car.length == 6? I predict True.");
// console.log(car.length == 6);

// // Test 5: Is car length not equal to 7?
// console.log("Is car.length != 7? I predict True.");
// console.log(car.length != 7);

// // Test 6: Is car starting with 's'?
// console.log("Does car start with 's'? I predict True.");
// console.log(car.startsWith('s'));

// // Test 7: Is car including 'sub'?
// console.log("Does car include 'sub'? I predict True.");
// console.log(car.includes('sub'));

// // Test 8: Is car not starting with 'h'?
// console.log("Does car not start with 'h'? I predict True.");
// console.log(!car.startsWith('h'));

// // Test 9: Is car not including 'toy'?
// console.log("Does car not include 'toy'? I predict True.");
// console.log(!car.includes('toy'));

// // Test 10: Is car all in lowercase?
// console.log("Is car all in lowercase? I predict True.");
// console.log(car.toLowerCase() === car);
// // 24
// // Tests for equality and inequality with strings
// let name: string = 'Alice';

// console.log("Is name == 'Alice'? I predict True.");
// console.log(name == 'Alice');

// console.log("Is name != 'Bob'? I predict True.");
// console.log(name != 'Bob');

// // Tests using the lower case function
// console.log("Is 'Hello'.toLowerCase() == 'hello'? I predict True.");
// console.log('Hello'.toLowerCase() == 'hello');

// // Numerical tests
// let x: number = 10;
// let y: number = 5;

// console.log("Is x > y? I predict True.");
// console.log(x > y);

// console.log("Is x < y? I predict False.");
// console.log(x < y);

// console.log("Is x >= 10? I predict True.");
// console.log(x >= 10);

// console.log("Is y <= 5? I predict True.");
// console.log(y <= 5);

// // Tests using "and" and "or" operators
// let age: number = 25;
// let height: number = 160;

// console.log("Is age > 18 and height > 150? I predict True.");
// console.log(age > 18 && height > 150);

// console.log("Is age > 30 or height > 170? I predict False.");
// console.log(age > 30 || height > 170);

// // Test whether an item is in an array
// let fruits: string[] = ['apple', 'banana', 'orange'];

// console.log("Is 'banana' in fruits? I predict True.");
// console.log(fruits.includes('banana'));

// // Test whether an item is not in an array
// console.log("Is 'grape' not in fruits? I predict True.");
// console.log(!fruits.includes('grape'));
// 25

// let alien_color: string = 'green';

// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }


// 2 option
// let alien_color: string = 'red';

// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }

// 26
// let alien_color: string = 'green';

// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
// // }
// let alien_color: string = 'red';

// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
// }

// 27
// Type1

// let alien_color: string = 'green';

// // Check the color of the alien
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }

// // Type2
// let alien_color: string = 'yellow';

// // Check the color of the alien
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }



// // Type3
// let alien_color: string = 'red';

// // Check the color of the alien
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }
// // 28
// let age: number = 25;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// // 
// // 29
// // Array of favorite fruits
// let favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// // Check if certain fruits are in the array
// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes('orange')) {
//     console.log("You really like oranges!");
// }

// if (favorite_fruits.includes('grape')) {
//     console.log("You really like grapes!");
// }

// if (favorite_fruits.includes('kiwi')) {
//     console.log("You really like kiwis!");
// }



// 30

// // Array of usernames
// let usernames: string[] = ['Hassan', 'Ali', 'Waqas', 'Atta', 'Muzzamil'];

// // Loop through the array and print greetings
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }


// // 31
// // Array of usernames
// let usernames: string[] = ['Hassan', 'Ali', 'Waqas', 'Atta', 'Muzzamil'];

// // Check if the list of users is not empty
// if (usernames.length > 0) {
//     // Loop through the array and print greetings
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// } else {
//     console.log("We need to find some users!");
// }



// // 32
// // List of current users
// let current_users: string[] = ['john', 'alice', 'bob', 'charlie', 'emma'];

// // List of new users
// let new_users: string[] = ['emma', 'george', 'alice', 'olivia', 'harry'];

// // Loop through the new_users list
// for (let new_user of new_users) {
//     // Convert both current and new usernames to lowercase for case-insensitive comparison
//     let lowercase_new_user = new_user.toLowerCase();

//     // Check if the lowercase version of the new username exists in the lowercase version of the current usernames
//     if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//     }
// }


// // 33
// // Store the numbers 1 through 9 in an array
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let number of numbers) {
//     // Determine the ordinal ending based on the number
//     let ordinal: string;
//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }

//     // Print the number with the proper ordinal ending
//     console.log(`${number}${ordinal}`);
// }


// // 34
// // Array of favorite pizza names
// let pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// // Print the name of each pizza using a for loop
// for (let pizza of pizzas) {
//     console.log(pizza);
// }

// // Print a sentence for each pizza
// console.log("\n");

// for (let pizza of pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Print a statement about how much you like pizza
// console.log("\nI really love pizza!");



// // 35

// // Array of animals
// let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// // Print the name of each animal using a for loop
// for (let animal of animals) {
//     console.log(animal);
// }

// // Print a statement about each animal
// console.log("\n");

// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

// // Print a statement about what these animals have in common
// console.log("\nAny of these animals would make a great pet!");

// // 36

// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }

// // Call the function
// make_shirt('large', 'Hello, world!');



// // 37
// function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }

// // Call the function to create a large shirt with the default message
// make_shirt();

// // Call the function to create a medium shirt with the default message
// make_shirt('medium');

// // Call the function to create a shirt of any size with a different message
// make_shirt('small', 'Hello, world!');


// // 38
// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Call the function for three different cities
// describe_city('Karachi', 'Pakistan'); // City in the default country
// describe_city('London', 'United Kingdom'); // City not in the default country
// describe_city('New York'); // City using the default country parameter



// // 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Call the function with three city-country pairs
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('New York', 'United States'));
// console.log(city_country('Paris', 'France'));



// // 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     if (tracks) {
//         album.tracks = tracks;
//     }
//     return album;
// }

// // Create album objects using the make_album function
// let album1 = make_album('Artist 1', 'Album 1', 10);
// let album2 = make_album('Artist 2', 'Album 2');
// let album3 = make_album('Artist 3', 'Album 3', 15);

// // Print each album object
// console.log(album1);
// console.log(album2);
// console.log(album3);


// // 41
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Array of magician's names
// let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// // Call the function to show the magicians
// show_magicians(magicians);




// // 42

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }

// // Array of magician's names
// let magicians: string[] = ['Hassan', 'Ali', 'Waqas', 'Atta'];

// // Call the function to make the magicians great
// make_great(magicians);

// // Call the function to show the magicians
// show_magicians(magicians);




// // 43
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push(`the Great ${magician}`);
//     }
//     return great_magicians;
// }

// // Original array of magician's names
// let original_magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// // Make a copy of the original array
// let copied_magicians: string[] = original_magicians.slice();

// // Call the function to make the magicians great and store the result in a separate array
// let great_magicians: string[] = make_great(copied_magicians);

// // Call the function to show the original magicians
// console.log("Original Magicians:");
// show_magicians(original_magicians);

// // Call the function to show the great magicians
// console.log("\nGreat Magicians:");
// show_magicians(great_magicians);





// // 44
// function make_sandwich(...items: string[]): void {
//     console.log("Making sandwich with the following items:");
//     for (let item of items) {
//         console.log(`- ${item}`);
//     }
//     console.log("Sandwich is ready!");
// }

// // Call the function with different numbers of arguments
// make_sandwich('ham', 'cheese', 'lettuce');
// make_sandwich('turkey', 'bacon');
// make_sandwich('peanut butter', 'jelly');



// // 45
// interface Car {
//     manufacturer: string;
//     modelName: string;
//     [key: string]: any;
// }

// function carInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): Car {
//     let car: Car = {
//         manufacturer: manufacturer,
//         modelName: modelName
//     };

//     // Store additional options in the car object
//     for (let option of options) {
//         for (let key in option) {
//             car[key] = option[key];
//         }
//     }

//     return car;
// }

// // Call the function with required information and additional options
// let myCar = carInfo('Toyota', 'Camry', { color: 'blue', year: 2023 });

// // Print the returned object
// console.log(myCar);

