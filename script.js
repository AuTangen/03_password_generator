// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['!', '$', '&', '*', '#', '_'];





function getRandom(charSet) {
return charSet[Math.floor(Math.random() * charSet.length)];
}

function writePassword() {
  options.passwordLength = Number(window.prompt("Enter password length: 8-128 characters",""));
  if(options.passwordLength >= 8 && options.passwordLength <= 128) {
    options.lowercase = window.confirm("Would you like your password to contain lowercase letters?");
    options.uppercase = window.confirm("Would you like your password to contain uppercase letters?");
    options.numbers = window.confirm("Would you like your password to contain numbers?");
    options.special = window.confirm("Would you like your password to contain special characters?");
    
    var password = generatePassword(options);
    
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  
    

    else {
      alert("please enter a number between 8-128 TRY AGAIN")
      
    }
  }

 function generatePassword(data) {
  var result = '';
  var chars = [];
  
  if (data.lowercase) {
  chars = chars.concat(lower)
  }
  if (data.uppercase) {
    chars = chars.concat(upper);
  }
  if (data.numbers) {
    chars = chars.concat(num);
  }
  if (data.special) {
    chars = chars.concat(special);
  }
  
  for (var i = 0; i < data.passwordLength; i++) {
    result += getRandom(chars);
  }
  return result;
  }

  var options =  {
    passwordLength: [],
    lowercase: [],
    uppercase: [],
    numbers: [],
    special: []
  }

  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);



