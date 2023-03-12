// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['!', '$', '&', '*', '#', '_']
var chars = [];
var chars2 = [];
var chars3 = [];
var chars4 = [];
selectLength = [];

// var pass = [];
// Write password to the #password input
function getRandom(charSet) {
return charSet[Math.floor(Math.random * charSet.length)];
}

function writePassword() {
  var selectLength = Number(window.prompt("Enter password length: 8-128 characters",""));
  if(selectLength >= 8 && selectLength <= 128) {
    var typeLower = window.confirm("Would you like your password to contain lowercase letters?");
    var typeUpper = window.confirm("Would you like your password to contain uppercase letters?");
    var typeNumber = window.confirm("Would you like your password to contain numbers?");
    var typeSpecial = window.confirm("Would you like your password to contain special characters?");
    if (typeLower === true) {
      chars = lower;
      }
      else {chars = []};
      if (typeUpper === true) {
      chars2 = chars.concat(upper);
      }
      else {chars2 = lower};
      if (typeNumber === true) {
      chars3 = chars2.concat(num);
      }
      else {chars3 = chars2};
      if (typeSpecial === true) {
      chars4 = chars3.concat(special);
      }
      else{chars4 = chars3};
      // return chars4;
      console.log(chars4)
      console.log(selectLength);
    }

    else {
      alert("please enter a number between 8-128 TRY AGAIN")
      
    }}

     function generatePassword(options) {
      var result = '';
      for (var i = 0; i < selectLength; i++) {
        result += getRandom(chars4);
                     
      }
return result;

      // let pass = ' ';
      // const passlength = chars4.length;
      // for (let i = 0; i < selectLength.length; i++) {
      //   pass += chars4.charAt[Math.floor(Math.random()*passlength)];
      //   return pass;
      //             }
      //   // return pass;
      //   console.log(chars4);
      //   console.log(selectLength);
      //   console.log(typeLower);
      //   console.log(lower);
     
    }
    
    
  
  
  generatePassword();
  var options = selectLength;
  var password = generatePassword(chars4);
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
 
  


// -------------------------------------


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ------------------------------
// global arrays- lower, upper, num, special
// parameters- selectLength, typeLower, typeUpper, typeNumber, typeSpecial

