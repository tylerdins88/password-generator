// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase, uppercase, numeric, and/or special characters

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var userInput = "";
var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("How long would you like your password to be?");

  console.log(passwordLength);

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

  includeSpecial = confirm("Would you like to include special characters in your password?");

  if (includeSpecial === true) {
    userInput += specialCharacters
  };

  console.log(userInput);

  var userPass = userInput.split("");

  console.log(userPass);

  var userPassword = Math.floor(Math.random() * userPass.length);

  console.log(userPassword);
};