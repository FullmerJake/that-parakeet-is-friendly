// Assignment code here

 /* function generatePassword(lower, upper, number, symbol, length) {
  //1. initialize password variable
  //2. Filter out unchecked types
  //3. Loop over length, call generator function for each type
  //4. add final password to the password variable and return. 

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('types count: ', typesCount);

  const typesArr = [lower, upper, number, symbol];

  console.log('typesArr: ', typesArr);
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
 
*/

// DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');


// turns the generator functions into objects
const randomFunc = {
  // keys
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generate event listen
generateEL.addEventListener('click', () => {
  //  length to a number instead of string
  const length = +lengthEL.value;
  // checks to see if boxes are checked
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;
  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //1. initialize password variable
  //2. Filter out unchecked types
  //3. Loop over length, call generator function for each type
  //4. add final password to the password variable and return. 

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('types count: ', typesCount);

  // creates an array of objects, using the keys from above
  const typesArr = [{lower}, {upper}, {number}, {symbol}];

  console.log('typesArr: ', typesArr);

}


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


