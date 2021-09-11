// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomUpper = upperAlpha[Math.floor(Math.random() * upperAlpha.length)];


var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var randomLower = lowerAlpha[Math.floor(Math.random() * upperAlpha.length)];

var num = "1234567890";
var randomNum = num[Math.floor(Math.random() * num.length)];

var symbols ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

var character = [randomUpper, randomLower, randomNum, randomSymbol];
function randomCharacter() {
  character[Math.floor(Math.random() * character.length)];
}
 

function generatePassword() {
  var length = 0;
  while (length < 8 || length > 128) {
     length = prompt("How may characters? (8-128)");
  if (length < 8 || length > 128) {
    alert("Please enter valid password length!");
  }}
  var upConfirm = confirm("Do you want Uppercase letters? ")
  if (upConfirm === false){
    character.splice(0, 1)
};
  var loConfirm = confirm("Do you want Lowercase letters?")
  if (loConfirm === false){
    character.splice(1, 1)
  };
  var numConfirm = confirm("Do you want numbers??")
  if (numConfirm === false){
    character.splice(2, 1)
  };
  var symConfirm = confirm("Do you want special characters??")
  if (symConfirm === false) {
    character.splice(3, 1)
  };
  for (var i = 0; i < length; i++){
    randomCharacter
    if (i === length){
      return;
    };
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

