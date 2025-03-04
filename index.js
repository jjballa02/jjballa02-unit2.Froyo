// Prompt the user for froyo flavors
const userInput = prompt("Enter a list of comma-separated froyo flavors:");

// Convert input into an array and trim spaces
const flavorsArray = userInput ? userInput.split(",").map(flavor => flavor.trim().toLowerCase()) : [];

// Count occurrences of each flavor
const flavorCounts = {};
flavorsArray.forEach(flavor => {
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
});

// Display results in console as a table
console.table(flavorCounts);
