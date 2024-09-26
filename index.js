// Define a person object with properties: name, age, and country
let person = {
  name: "Bhoomi",
  age: 28,
  country: "Canada",
};

// Function to log the person's data
function logData() {
  // Log formatted string using template literals
  console.log(
    `${person.name} is ${person.age} years old and lives in ${person.country}`
  );
}

// Call the function to log the person's data
logData();

//////////////////////////////////////////////////////////////////////////

// Variable to hold age for discount eligibility
let age = 15;

// Determine and log discount category based on age
if (age < 6) {
  console.log("Free");
} else if (age <= 17) {
  console.log("Child Discount");
} else if (age <= 26) {
  console.log("Student Discount");
} else if (age <= 66) {
  console.log("Full Price");
} else {
  console.log("Senior Citizen Discount");
}

///////////////////////////////////////////////////////////////////////////

// Array of large countries
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// Loop through the array and log each country
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

///////////////////////////////////////////////////////////////////////

// Modify the largeCountries array
largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// Remove the first country from the array
largeCountries.shift();

// Add "China" to the beginning of the array
largeCountries.unshift("China");

// Remove the last country from the array
largeCountries.pop();

// Add "Pakistan" to the end of the array
largeCountries.push("Pakistan");

// Log the modified countries array
console.log(largeCountries);

//////////////////////////////////////////////////////////////////////

// Define variables for day of the month and weekday
let dayOfMonth = 31;
let weekday = "Friday";

// Check if the day is the 13th and the weekday is Friday
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱"); // Log a shocked emoji
}

///////////////////////////////////////////////////////////////////////

// Array of possible hands in the game
let hands = ["rocks", "paper", "scissor"];

// Function to get a random hand
function getHand() {
  // Generate a random index from 0 to 2
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex]; // Return the randomly selected hand
}

// Log the randomly selected hand
console.log(getHand());

//////////////////////////////////////////////////////////////////////

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let fighter1Index = Math.floor(Math.random() * fighters.length);
  let fighter2Index = Math.floor(Math.random() * fighters.length);

  stageEl.textContent =
    fighters[fighter1Index] + " vs " + fighters[fighter2Index];
});

///////////////////////////////////////////////////////////////////////

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
  for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += " 🍎 ";
    } else {
      orangeShelf.textContent += " 🍊 ";
    }
  }
}

sortFruit();
