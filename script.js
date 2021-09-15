
var generateBtn = document.querySelector("#generate");

var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomUpper = upperAlpha[Math.floor(Math.random() * upperAlpha.length)];


var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var randomLower = lowerAlpha[Math.floor(Math.random() * upperAlpha.length)];

var num = "1234567890";
var randomNum = num[Math.floor(Math.random() * num.length)];

var symbols ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

function randomCharacter() {
  return character[Math.floor(Math.random() * character.length)];
}
 

function generatePassword() {
  var length = 0;
  while (length < 8 || length > 128) {
     length = prompt("How may characters? (8-128)");
     console.log(length);
  if (length < 8 || length > 128) {
    alert("Please enter valid password length!");
  }}
  var finalPassword = "";
  var allPossibleChar = "";
  var upConfirm = confirm("Do you want Uppercase letters? ")
  if (upConfirm === true){
    finalPassword += randomUpper
    allPossibleChar = allPossibleChar + upperAlpha;
};
  var loConfirm = confirm("Do you want Lowercase letters?")
  if (loConfirm === true){
    finalPassword += randomLower
    allPossibleChar = allPossibleChar + lowerAlpha;
  };
  var numConfirm = confirm("Do you want numbers??")
  if (numConfirm === true){
    finalPassword += randomNum
    allPossibleChar = allPossibleChar + num;
  };
  var symConfirm = confirm("Do you want special characters??")
  if (symConfirm === true) {
    finalPassword += randomSymbol
    allPossibleChar = allPossibleChar + symbols;
  };
  if (allPossibleChar.length == 0){
    alert("Please chose at least one character type!");
    return;
  }
  else {
  for (var i = finalPassword.length; i < length; i++){
    var newLetter = allPossibleChar[Math.floor(Math.random() * allPossibleChar.length)]
    console.log(newLetter)
  finalPassword = finalPassword + newLetter;
  }
  return finalPassword;
}}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

