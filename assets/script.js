// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Variables that hold the different sets of password criteria.
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Variables that hold the users input criteria and password.
var userInput = "";
var passwordLength = 0;
var passwordHere = "";
var userPassword = "";

// Function that generates password.
function generatePassword() {
  userInput = "";
  passwordHere = "";
  passwordLength = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordCharacters();
  } else {
    areYouSure();
  }
  return userPassword;
};

// This is the function if the user decides they no longer want to generate a password or tries to choose
// a character amount less than 8, greater than 128, or something other than a number. 
function areYouSure() {
  var pleaseConfirm = confirm("Do you still want to make a password?")
  if (pleaseConfirm === true) {
    generatePassword();
  } else {
    alert("No password will be generated.");
  }
};

// This section is a function that creates an array of password criteria based on user input.
function passwordCharacters() {
  var guaranteedCriteria = ""; // This is a variable to ensure at least one of all criteria selected is included. 
  var includeLower = confirm("Would you like to include lowercase letters in your password?");
  if (includeLower === true) {
    userInput += lowerCase // This will create a massive array to pull random characters from. 
    guaranteedCriteria += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // This makes a string to ensure at least 1 of the criteria is included. 
  };
  var includeUpper = confirm("Would you like to include uppercase letters in your password?");
  if (includeUpper === true) {
    userInput += upperCase
    guaranteedCriteria += upperCase[Math.floor(Math.random() * upperCase.length)];
  };
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  if (includeNumbers === true) {
    userInput += numbers
    guaranteedCriteria += numbers[Math.floor(Math.random() * numbers.length)];
  };
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  if (includeSpecial === true) {
    userInput += specialCharacters
    guaranteedCriteria += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  };
  if (includeLower === false && includeUpper === false && includeNumbers === false && includeSpecial === false) {
    var restart = confirm("Please include at least one password criteria.")
    if (restart === true) {
      passwordCharacters();
    } else {
      areYouSure();
    }
    return;
  }

  // These lines tell you the array of criteria to be used for the password.
  var userPassCriteria = userInput.split([]);
  console.log(userPassCriteria);
  console.log(passwordLength);
  console.log(guaranteedCriteria);

  // This loop selects random criteria from the criteria array and puts them together to create the password.
  function makeNewPass() {
    for (i = 0; i <= (passwordLength - guaranteedCriteria.length - 1); i++) {
      var randomChar = Math.floor(Math.random() * userPassCriteria.length);
      var passwordRand = userPassCriteria[randomChar];
      passwordHere += passwordRand;
    }
    // This takes the random characters chosen and adds the guaranteed criteria to ensure proper length and all criteria included.
    userPassword = passwordHere.concat(guaranteedCriteria);
  }
  makeNewPass();
}