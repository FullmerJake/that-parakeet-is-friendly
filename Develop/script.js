// Assignment code here
function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Psuedocode
// 1. Present user with a series of prompts, allowing to customize password
// 2. When prompted, I can select which criteria to include in the password
// 3. When prompted for length, I can choose between 8-128 characters (no less than 8, or more than 128)
// 4. When prompted for character type, I choose lowercase, uppercase, numeric, and/or special characters
// 5. When I answer prompt, input should be validated and at least 1 character type selected.
// 6. When all prompts answered, paddword is generated that matches criteria
// 7. Final password is displayed in an alert or written to the page. 




//Generator functions

function getRandomLower() {
  //generates a random number between 97-122, which corrosponds to each code for lowercase alphabet
  //String.fromCharCode uses CharCode to "look up" the coorisponding letter/symbol/case
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // see above for how function works. 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // see above
  return String.getCharCode(Math.floor(Math.random * 10) + 48);
}

function getRandomSymbol() {
  //creates a variable and stores symbols as strings on the american keyboard
  const symbols = '!@#$%^&*()[]{}<>/?;:",.+-_=';
  //returns a random value from the symbol variable
  return symbols[Math.floor(Math.random() * symbols.length)];
}


