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
  passwordLength = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordCharacters();
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
  if (includeLower) {
    userInput += lowerCase
  };
  var includeUpper = confirm("Would you like to include uppercase letters in your password?");
  if (includeUpper) {
    userInput += upperCase
  };
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  if (includeNumbers) {
    userInput += numbers
  };
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  if (includeSpecial) {
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
  var userPassCriteria = userInput.split("");
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
    checkPassword(passwordHere);
  }

  // This function checks my password to make sure all of the criteria is included.
  function checkPassword() {
    console.log(includeLower);
    console.log(includeUpper);
    console.log(includeNumbers);
    console.log(includeSpecial);
    var lowerCaseCheck = false;
    var upperCaseCheck = false;
    var numbersCheck = false;
    var specialCheck = false;
    // This checks for the lowercase characters.
    if (includeLower) {
      var lowerCaseARR = lowerCase.split([]);
      for (i = 0; i < lowerCaseARR.length; i++) {
        if (passwordHere.includes(lowerCaseARR[i])) {
          lowerCaseCheck = true;
        }
      }
      console.log(lowerCaseCheck);
    }
    // This checks for the uppercase characters.
    if (includeUpper) {
      var upperCaseARR = upperCase.split([]);
      for (i = 0; i < upperCaseARR.length; i++) {
        if (passwordHere.includes(upperCaseARR[i])) {
          upperCaseCheck = true;
        }
      }
      console.log(upperCaseCheck);
    }
    // This checks for the numbers characters.
    if (includeNumbers) {
      var numbersARR = numbers.split([]);
      for (i = 0; i < numbersARR.length; i++) {
        if (passwordHere.includes(numbersARR[i])) {
          numbersCheck = true;
        }
      }
      console.log(numbersCheck);
    }
    // This checks for special characters.
    if (includeSpecial) {
      var specialARR = specialCharacters.split([]);
      for (i = 0; i < specialARR.length; i++) {
        if (passwordHere.includes(specialARR[i])) {
          specialCheck = true;
        }
      }
      console.log(specialCheck);
    }
    console.log(passwordHere);
    // If all characters are included, the password is returned. 
    if (lowerCaseCheck && upperCaseCheck && numbersCheck && specialCheck) {
      passwordHere;
    } else if (lowerCaseCheck && upperCaseCheck && numbersCheck) {
      passwordHere;
    } else if (lowerCaseCheck & upperCaseCheck && specialCheck) {
      passwordHere;
    } else if (lowerCaseCheck && numbersCheck && specialCheck) {
      passwordHere;
    } else if (upperCaseCheck && numbersCheck && specialCheck) {
      passwordHere;
    } else if (lowerCaseCheck && upperCaseCheck) {
      passwordHere;
    } else if (lowerCaseCheck && numbersCheck) {
      passwordHere;
    } else if (lowerCaseCheck && specialCheck) {
      passwordHere;
    } else if (upperCaseCheck && numbersCheck) {
      passwordHere;
    } else if (upperCaseCheck && specialCheck) {
      passwordHere;
    } else if (numbersCheck && specialCheck) {
      passwordHere;
    } else if (lowerCaseCheck) {
      passwordHere;
    } else if (upperCaseCheck) {
      passwordHere;
    } else if (numbersCheck) {
      passwordHere;
    } else if (specialCheck) {
      passwordHere;
    } else {
      makeNewPass();
    }
  }
  makeNewPass();
};