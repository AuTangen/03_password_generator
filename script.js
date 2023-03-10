// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let selectLength = Number(window.prompt("Enter password length 8-128 characters",""));
  if(selectLength >= 8 && selectLength <= 128) {
    let typeLower = window.confirm("Would you like your password to contain lowercase letters?");
    let typeUpper = window.confirm("Would you like your password to contain uppercase letters?");
    let typeNumber = window.confirm("Would you like your password to contain numbers?");
    let typeSpecial = window.confirm("Would you like your password to contain special characters?");
  }
  
  else {
    alert("please enter a number between 8-128")
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}
// -------------------------------------


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ------------------------------
// parameters- selectLength, typeLower, typeUpper, typeNumber, typeSpecial