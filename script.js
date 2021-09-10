// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var randomUpper = upperAlpha[Math.floor(Math.random() * upperAlpha.length)]
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
var randomLower = lowerAlpha[Math.floor(Math.random() * upperAlpha.length)]
var num = "1234567890"
var randomNum = num[Math.floor(Math.random() * num.length)]
var symbols ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]

var character = [randomUpper, randomLower, randomNum, randomSymbol]
var randomCharacter = character[Math.floor(Math.random() * character.length)]
//var numCharacters = [Range(8, 128)]  

function generatePassword() {
  var length = prompt("How may characters? (8-128)");
   // if (length != 8, 128) {alert("Incorrect Value!!");
  }
  // var type = prompt("Upper Case or lower case?"); 
  //   if (type != null) {confirm("Numbers and special characters?")};
  // }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for (var i = 0; i < 7; i++) {
console.log(randomCharacter)
}