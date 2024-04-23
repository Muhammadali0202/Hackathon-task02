function isPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitive comparison
  str = str.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the string
  let left = 0;
  let right = str.length - 1;

  // Loop until the pointers meet
  while (left < right) {
    // If characters at the pointers are not equal, return false (not a palindrome)
    if (str[left] !== str[right]) {
      return false;
    }
    // Move the pointers towards the center
    left++;
    right--;
  }
  // If the loop completes without returning false, the string is a palindrome
  return true;
}

let userInput = prompt("Enter a word:");

if (isPalindrome(userInput)) {
  console.log(`"${userInput}" is a palindrome.`);
} else {
  console.log(`"${userInput}" is not a palindrome.`);
}
