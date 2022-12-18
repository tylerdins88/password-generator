// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables that hold the different sets of password criteria
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Variables that hold the users input criteria and password
var userInput = "";
var passwordLength = 0;
var passwordHere = "";

// Function that generates password
function generatePassword() {
  userInput = "";
  passwordHere = "";
  passwordLength = prompt("How many characters would you like your password to be?");

  if (passwordLength > 8 && passwordLength < 128) {
    passwordCharacters();
  } else {
    var verify = confirm("Please choose a number between of characters between 8 and 128.")
    if (verify === true) {
      generatePassword();
    } else {
      alert("No password will be generated.")
    }
  }
  console.log(passwordHere);
  return passwordHere;
};

// This section is a function that creates an array of password criteria based on user input
function passwordCharacters() {
  var includeLower = confirm("Would you like to include lowercase letters in your password?");
  if (includeLower === true) {
    userInput += lowerCase
  };

  var includeUpper = confirm("Would you like to include uppercase letters in your password?");
  if (includeUpper === true) {
    userInput += upperCase
  };

  var includeNumbers = confirm("Would you like to include numbers in your password?");
  if (includeNumbers === true) {
    userInput += numbers
  };

  var includeSpecial = confirm("Would you like to include special characters in your password?");
  if (includeSpecial === true) {
    userInput += specialCharacters
  };

  if (includeLower === false && includeUpper === false && includeNumbers === false && includeSpecial === false) {
    var restart = confirm("Please include at least one password criteria.")
    if (restart === true) {
      passwordCharacters();
    } else {
      var areYouSure = confirm("Do you still want to make a password?")
      if (areYouSure === true) {
        passwordCharacters();
      } else {
        alert("No password will be generated.")
      }
    }
  }

  // These lines tell you the array of criteria to be used for the password
  var userPass = userInput.split("");
  console.log(userPass);
  console.log(passwordLength);

  // This loop selects random criteria from the criteria array and puts them together to create the password
  for (i = 0; i <= passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * userPass.length);
    var userPassword = userPass[randomChar];
    passwordHere += userPassword;
  }
};