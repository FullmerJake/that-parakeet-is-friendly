
//creates arrays that contain the codes for the different alphanumeric symbols to call in later functions. 
const results = document.querySelector("#result");
const charNum = [48, 57];
const charUpper = [65, 90];
const charLower = [97, 122];
const charSymbol = [33, 47];

// Assignment code here
 function generatePassword() {


 /* some of the following code was copied from a developer named Justin Raj. I have included changes of my own to adapt to my personal project
  as well as better reflect the requirements of this particular projet */


   //creates variables that determine whether or not the html box element is checked or not, as well as the desired length. 
  const length = document.querySelector("#length").value;
  const upper = document.querySelector("#uppercase").checked;
  const lower = document.querySelector("#lowercase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const symbols = document.querySelector("#symbols").checked;

  //creates 2 empty arrays
  const randSelector = [];
  const password = [];


  //checks to see if length is set between 8 and 120 characters
  if (length >= 8 && length <= 120) {
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

  else if(length < 8 || length > 120) {
    alert('Please choose a valid length between 8 and 120 characters, and check at least 1 box.');
  }
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector('#generate').addEventListener("click", writePassword);
