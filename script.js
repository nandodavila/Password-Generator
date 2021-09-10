// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How may characters? (8-128)");
    if (characters != "8") {alert("Incorrect Value!!");
  }
  var type = prompt("Upper Case or lower case?"); 
    if (type != null) {confirm("Numbers and special characters?")};
  }  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);