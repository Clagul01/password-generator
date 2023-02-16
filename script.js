// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let passwordLength = 0;
let upperCaseType = false;
let numericCaseType = false;
let specialCharacter = false;
let password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "Please enter the length of your password (between 8 to 128 characters)"
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    upperCaseType = confirm("Would you like to use uppercase letters?");
    lowerCaseType = confirm("Would you like to use lowercase letters?");
    numericCaseType = confirm("Would you like to use numeric letters?");
    specialCharacter = confirm("Would you like to include special characters?");
    alert("Thank you for your answers.");
  } else {
    alert("Password is not the right length.");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  let blendedArray = [];
  if (upperCaseType) {
    blendedArray = blendedArray.concat(upperCasedCharacters);
  }
  if (lowerCaseType) {
    blendedArray = blendedArray.concat(lowerCasedCharacters);
  }
  if (specialCharacter) {
    blendedArray = blendedArray.concat(specialCharacters);
  }
  if (numericCaseType) {
    blendedArray = blendedArray.concat(numericCharacters);
  };

  let result = "";
  for (let i = 0; i < passwordLength; i++) {
    let element = getRandom(blendedArray);
    result += element;
  }
  return result;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

getPasswordOptions();
