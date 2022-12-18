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

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var userInput = "";
var passwordLength;
var userPassword;
var randomChar;

function generatePassword() {
  passwordLength = prompt("How long would you like your password to be?");

  if (passwordLength > 8 && passwordLength < 128) {
    passwordCharacters();
  } else {
    alert("Please choose a number between of characters between 8 and 128.")
    generatePassword();
  }
};

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
        alert("No password will be generatored.")
      }
    }
  }

  console.log(userInput);

  var userPass = userInput.split("");

  console.log(userPass);

  // for (i = 0; i < passwordLength.length; i++) {
  //   userPassword = Math.floor(Math.random() * userPass.length);

  //   var randomChar += userPass[userPassword];
  // }

  // console.log(randomChar);

};