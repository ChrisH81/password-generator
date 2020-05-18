// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let password = "";
  let passLength = parseInt(prompt("Please enter password passLength between 8 and 128", ""));
  let includeLower = false;
  let includeUpper = false;
  let numeric = false;
  let special = false;
  while (passLength < 8 || passLength > 128 || Number.isNaN(passLength)) {
    passLength = parseInt(prompt("Please enter password passLength between 8 and 128", ""));
    if (passLength < 8 || passLength > 128 || Number.isNaN(passLength)) {
      alert("password passLength must be between 8 and 128");
    }
  }

  while (!includeLower && !includeUpper && !numeric && !special) {
    let includeLowerPrompt = prompt("Would you like to include lower case letters? enter yes or no", "");
    if (includeLowerPrompt.toLowerCase === "yes") {
      includeLower = true;
    }
    let includeUpperPrompt = prompt("Would you like to include upper case letters? enter yes or no", "");
    if (includeUpperPrompt.toLowerCase === "yes") {
      includeUpper = true;
    }
    let numericPrompt = prompt("Would you like to include numeric symbols? enter yes or no", "");
    if (numericPrompt.toLowerCase=== "yes") {
      numeric = true;
    }
    let specialPrompt = prompt("Would you like to include special characters? enter yes or no", "");
    if (specialPrompt.toLowerCase === "yes") {
      special = true;
    }
    if (!includeLower && !includeUpper && !numeric && !special) {
      alert("you need to choose at least one character type");
    }
  }

  // 0 - 25 Uppercase, 26 -51 lowercase, 52 - 61 numbers, 62- 7- special characters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(';
  const lowwerCharacters = '';
  for (let i = 0; i < passLength; i++) {
    let randomIndex = 0;

    if (includeLower) {

      randomIndex = randomNumber(26, 51);
      console.log("lower", randomIndex);
    }

    if (randomIndex > 0 && randomNumber(1, 3) == 1) {
      randomIndex = randomNumber(0, 25);
      console.log("upper", randomIndex);
    }


    if (numeric) {
      if (randomIndex > 0 && randomNumber(1, 3) === 1) {
        randomIndex = randomNumber(52, 61);
        console.log("numeric", randomIndex);
      }
    }

    if (special) {
      if (randomIndex > 0 && randomNumber(1, 3) === 1) {
        randomIndex = randomNumber(62, 71);
        console.log("special", randomIndex);
      }

    }

    password += characters.charAt(randomIndex);
  }


  console.log(password);
  return password;

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}