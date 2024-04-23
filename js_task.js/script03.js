function findMissingNumber(series) {
  // Sort the series in ascending order
  series.sort((a, b) => a - b);

  // Iterate through the series to find the missing number
  for (let i = 0; i < series.length - 1; i++) {
      // If the difference between consecutive numbers is more than 1,
      // then there is a missing number in between
      if (series[i + 1] - series[i] !== 1) {
          // Return the missing number
          return series[i] + 1;
      }
  }

  // If no missing number is found, return null
  return null;
}

// Prompt the user to enter the series of numbers without commas
let userInput = prompt("Enter the series of numbers separated by spaces:");

// Convert the user input string into an array of numbers
let series = userInput.split(' ').map(num => parseInt(num));

// Check if the input array contains only valid numbers
if (!isNaN(series[0])) {
// Find the missing number
let missingNumber = findMissingNumber(series);
if (missingNumber !== null) {
  console.log(`The missing number is: ${missingNumber}`);
} else {
  console.log("No missing number found in the series.");
}
} else {
console.log("Invalid input. Please enter valid numbers separated by spaces.");
}
