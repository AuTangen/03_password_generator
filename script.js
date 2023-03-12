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
// var pass = [];
// Write password to the #password input
function writePassword() {
  let selectLength = Number(window.prompt("Enter password length: 8-128 characters",""));
  if(selectLength >= 8 && selectLength <= 128) {
    let typeLower = window.confirm("Would you like your password to contain lowercase letters?");
    let typeUpper = window.confirm("Would you like your password to contain uppercase letters?");
    let typeNumber = window.confirm("Would you like your password to contain numbers?");
    let typeSpecial = window.confirm("Would you like your password to contain special characters?");
// ----------- anything below this line may be fucked, but so far it works ---------
// function getRandom() {
//   return [Math.floor(Math.random()*selectLength.length)];
// }

// var generatePassword = function() {
      
     function generatePassword() {

      
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

      let pass = ' ';
      const passlength = chars4.length;
      for (let i = 0; i < selectLength.length; i++) {
        pass += chars4.charAt[Math.floor(Math.random()*passlength)];
        return pass;
                  }
        // return pass;
        console.log(chars4);
        console.log(selectLength);
        console.log(pass);
        console.log(typeLower);
        console.log(lower);
     
    }
    
    
  }
  
  else {
    alert("please enter a number between 8-128 TRY AGAIN")
    
  }
  var password = generatePassword(selectLength.length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}
// -------------------------------------


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ------------------------------
// global arrays- lower, upper, num, special
// parameters- selectLength, typeLower, typeUpper, typeNumber, typeSpecial

chars.charAt