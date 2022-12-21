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

// Function that generates password.
function generatePassword() {
  userInput = "";
  passwordHere = "";
  passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordCharacters();
  } else {
    areYouSure();
  }
};

// This is the function if the user decides they no longer want to generate a password. 
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
      areYouSure();
    }
  }

  // These lines tell you the array of criteria to be used for the password.
  var userPassCriteria = userInput.split([]);
  console.log(userPassCriteria);
  console.log(passwordLength);

  // This loop selects random criteria from the criteria array and puts them together to create the password.
  function makeNewPass() {
    passwordHere = "";
    for (i = 0; i <= passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * userPassCriteria.length);
      var passwordRand = userPassCriteria[randomChar];
      passwordHere += passwordRand;
    }
    return checkPassword(passwordHere);
  }

  // This function checks my password to make sure all of the criteria is included.
  function checkPassword(passwordHere) {
    var lowerCaseCheck = false;
    var upperCaseCheck = false;
    var numbersCheck = false;
    var specialCheck = false;
    // This checks for the lowercase characters.
    if (includeLower === true) {
      var lowerCaseARR = lowerCase.split([]);
      for (i = 0; i < lowerCaseARR.length; i++) {
        if (passwordHere.includes(lowerCaseARR[i])) {
          lowerCaseCheck = true;
        }
      }
    }
    // This checks for the uppercase characters.
    if (includeUpper === true) {
      var upperCaseARR = upperCase.split([]);
      for (i = 0; i < upperCaseARR.length; i++) {
        if (passwordHere.includes(upperCaseARR[i])) {
          upperCaseCheck = true;
        }
      }
    }
    // This checks for the numbers characters.
    if (includeNumbers === true) {
      var numbersARR = numbers.split([]);
      for (i = 0; i < numbersARR.length; i++) {
        if (passwordHere.includes(numbersARR[i])) {
          numbersCheck = true;
        }
      }
    }
    // This checks for special characters.
    if (includeSpecial === true) {
      var specialARR = specialCharacters.split([]);
      for (i = 0; i < specialARR.length; i++) {
        if (passwordHere.includes(specialARR[i])) {
          specialCheck = true;
        }
      }
    }
    console.log(passwordHere);
    // If all characters are included, the password is returned. 
    if (lowerCaseCheck && upperCaseCheck && numbersCheck && specialCheck) {
      return passwordHere;
      // If all characters are not included, a new password is made.
    } else {
      return makeNewPass();
    }
  }
  return makeNewPass();
};
