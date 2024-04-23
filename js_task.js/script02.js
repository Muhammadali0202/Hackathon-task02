function findMinMax(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    } else if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return { min, max };
}

// Prompt the user to enter the number of elements in the series
let numCount = parseInt(prompt("Enter the number of elements in the series:"));

// Create an array to store the numbers
let numbersArray = [];

// Prompt the user to enter each number
for (let i = 0; i < numCount; i++) {
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  if (!isNaN(num)) {
    numbersArray.push(num);
  } else {
    console.log(`Invalid input for number ${i + 1}. Please enter a valid number.`);
    break;
  }
}

// Check if the input array is not empty and contains only valid numbers
if (!isNaN(numbersArray[0])) {
  // Find the minimum and maximum numbers
  let result = findMinMax(numbersArray);
  console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
