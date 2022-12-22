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
  var guaranteedCriteria = "";
  var includeLower = confirm("Would you like to include lowercase letters in your password?");
  var lowerCaseSelect = "";
  if (includeLower === true) {
    userInput += lowerCase
    lowerCaseSelect = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    guaranteedCriteria += lowerCaseSelect;
  };
  var includeUpper = confirm("Would you like to include uppercase letters in your password?");
  var upperCaseSelect = "";
  if (includeUpper === true) {
    userInput += upperCase
    upperCaseSelect = upperCase[Math.floor(Math.random() * upperCase.length)];
    guaranteedCriteria += upperCaseSelect;
  };
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  var numbersSelect = "";
  if (includeNumbers === true) {
    userInput += numbers
    numbersSelect = numbers[Math.floor(Math.random() * numbers.length)];
    guaranteedCriteria += numbersSelect;
  };
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  var specialSelect = "";
  if (includeSpecial === true) {
    userInput += specialCharacters
    specialSelect = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    guaranteedCriteria += specialSelect;
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
  console.log(guaranteedCriteria);

  // This loop selects random criteria from the criteria array and puts them together to create the password.
  function makeNewPass() {
    for (i = 0; i <= (passwordLength - guaranteedCriteria.length - 1); i++) {
      var randomChar = Math.floor(Math.random() * userPassCriteria.length);
      var passwordRand = userPassCriteria[randomChar];
      passwordHere += passwordRand;
    }
    userPassword = passwordHere.concat(guaranteedCriteria);
  }
  makeNewPass();
}