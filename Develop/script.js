

//Psuedocode
// 2. When prompted, I can select which criteria to include in the password
// 3. When prompted for length, I can choose between 8-128 characters (no less than 8, or more than 128)
// 4. When prompted for character type, I choose lowercase, uppercase, numeric, and/or special characters
// 5. When I answer prompt, input should be validated and at least 1 character type selected.
// 6. When all prompts answered, paddword is generated that matches criteria
// 7. Final password is displayed in an alert or written to the page. 



//creates arrays that contain the codes for the different alphanumeric symbols to call in later functions. 
const results = document.querySelector("#result");
const charNum = [48, 57];
const charUpper = [65, 90];
const charLower = [97, 122];
const charSymbol = [33, 47];

// Assignment code here
 function generatePassword() {
   //creates variables that determine whether or not the html box element is checked or not, as well as the desired length. 
  const length = document.querySelector("#length").value;
  const upper = document.querySelector("#uppercase").checked;
  const lower = document.querySelector("#lowercase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const symbols = document.querySelector("#symbols").checked;

  //creates 2 empty arrays
  const randSelector = [];
  const password = [];


  // each of these take the variables from above, and determine if they are true or not (checked or not)
  // if they are true, runs the for loop to get random numbers that corrospond to the CharCode chart for the different alphanumeric symbols. 
  //it then pushes that code to the randSelector array and slowly build upon itself.
  if (upper === true) {
      for (let i = charUpper[0]; i <= charUpper[1]; i++) {
          randSelector.push(i);
      }

  }
  if (numbers === true) {
      for (let i = charNum[0]; i <= charNum[1]; i++) {
          randSelector.push(i);
      }

  }
  if (symbols === true) {
      for (let i = charSymbol[0]; i <= charSymbol[1]; i++) {
          randSelector.push(i);
      }
  }
  if (lower === true) {
      for (let i = charLower[0]; i <= charLower[1]; i++) {
          randSelector.push(i);
      }
  }

  //translates the randSelector array and pushes it into the empty password array, taking into account the length set. 
  for (let i = 0; i < length; i++) {
      password.push(String.fromCharCode(randSelector[Math.floor(Math.random() * randSelector.length)]))
  }

  //enters the password array into the results variable for transfer to the user. 
  results.textContent = password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector('#generate').addEventListener("click", writePassword);
