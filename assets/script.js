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
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordCharacters();
  } else {
    areYouSure();
  }
  console.log(passwordHere);
  return passwordHere;
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
      areYouSure();
    }
  }


  // These lines tell you the array of criteria to be used for the password
  var userPass = userInput.split([]);
  console.log(userPass);
  console.log(passwordLength);
  var passwordHereARR = [];
  // This loop selects random criteria from the criteria array and puts them together to create the password
  function makeNewPass() {
    for (i = 0; i <= passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * userPass.length);
      var passwordRand = userPass[randomChar];
      passwordHere += passwordRand;
      passwordHereARR = passwordHere.split([]);
      checkPassword(passwordHereARR);
      console.log("checked");
    }
  }

  function checkPassword() {
    // var lowerCaseARR = lowerCase.split([]);
    // console.log(lowerCaseARR);
    // var upperCaseARR = upperCase.split([]);
    // console.log(upperCaseARR);
    // var numbersARR = numbers.split([]);
    // console.log(numbersARR);
    // var specialCharactersARR = specialCharacters.split([]);
    // console.log(specialCharactersARR);
    for (i = 0; i < passwordHereARR.length; i++) {
      if (includeLower === true && includeUpper === true && includeNumbers === true && includeSpecial === true) {
        if (passwordHere.includes(lowerCase && upperCase && numbers && specialCharacters)) {
          console.log("checked");
          return;
        } else {
          makeNewPass();
        }
      }
    }
  }

  makeNewPass();
};

// var lowerCaseARR = lowerCase.split([]);
// console.log(lowerCaseARR);
// var upperCaseARR = upperCase.split([]);
// console.log(upperCaseARR);
// var numbersARR = numbers.split([]);
// console.log(numbersARR);
// var specialCharactersARR = specialCharacters.split([]);
// console.log(specialCharactersARR);









// function checkPassword() {
//   for (i = 0; i < passwordHere.length; i++) {
//     if (includeLower === true && includeUpper === true && includeNumbers === true && includeSpecial === true) {
//       if (passwordHere[i].includes(!lowerCase && !upperCase && !numbers && !specialCharacters)) {
//         console.log("checked");
//         makeNewPass();
//       }
//     }
//   }
// }

// // This for loop is my check to make sure the criteria chosen by the user is included in the password. 
// for (i = 0; i < passwordHere.length; i++) {
//   console.log("checked");
//   if (includeLower === true && includeUpper === true && includeNumbers === true && includeSpecial === true) {
//     if (passwordHere[i].includes(!lowerCase && !upperCase && !numbers && !specialCharacters)) {
//       makeNewPass();
//     }
//   } else if (includeLower === true && includeUpper === true && includeNumbers === true) {
//     passwordHere[i].includes(lowerCase && upperCase && numbers)
//   } else if (includeLower === true && includeUpper === true && includeSpecial === true) {
//     passwordHere[i].includes(lowerCase && upperCase && specialCharacters)
//   } else if (includeLower === true && includeNumbers === true && includeSpecial === true) {
//     passwordHere[i].includes(lowerCase && numbers && specialCharacters)
//   } else if (includeUpper === true && includeNumbers === true && includeSpecial === true) {
//     passwordHere[i].includes(upperCase && numbers && specialCharacters)
//   } else if (includeLower === true && includeUpper === true) {
//     passwordHere[i].includes(lowerCase && upperCase)
//   } else if (includeLower === true && includeNumbers === true) {
//     passwordHere[i].includes(lowerCase && numbers)
//   } else if (includeLower === true && includeSpecial === true) {
//     passwordHere[i].includes(lowerCase && specialCharacters)
//   } else if (includeUpper === true && includeNumbers === true) {
//     passwordHere[i].includes(upperCase && numbers)
//   } else if (includeUpper === true && includeSpecial === true) {
//     passwordHere[i].includes(upperCase && specialCharacters)
//   } else if (includeNumbers === true && includeSpecial === true) {
//     passwordHere[i].includes(numbers && specialCharacters)
//   } else {
//     makeNewPass();
//   }
// }