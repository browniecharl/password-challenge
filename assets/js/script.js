var characters = "";
var specialCharacters = "!@#$%^&*()_+=-<,>.;':`/?~";
var numbers = "1234567890";
var upperCaseCharacters ="ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";


// Window to ask how many characters user would like password to be

var generatePassword = function() {
  var lengthOfPassword = window.prompt("How many characters would you like your password to include?");

  if(lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Password must be between 8-128 characters!")
    var lengthOfPassword = window.prompt("How many characters would you like your password to include?")
  }
  // Ask user whether or not they would like different characters for password
    var specialCharactersOk = confirm("Click OK to include special characters in your password.");
    var numbersOk = confirm("Click OK to include numbers in your password.")
    var upperCaseCharactersOk = confirm("Click Ok to include upper case letters in your password.");
    var lowerCaseCharactersOk = confirm("Click OK to include lower case letters in your password.");

    if (specialCharactersOk == false && numbersOk == false && upperCaseCharactersOk == false && lowerCaseCharactersOk == false) {
      alert("Password must include at least one of the 4 previous options. Try again!"); 
      generatePassword();   

    }
    else {
      alert("GENERATING PASSWORD!")
    }  
      
    if (specialCharactersOk = true) {
      characters = characters + specialCharacters
    }

    if (numbersOk = true) {
      characters = characters + numbers
    }
      
    if (lowerCaseCharactersOk = true) {
      characters = characters + lowerCaseCharacters
    }

    if (upperCaseCharactersOk = true) {
      characters = characters + upperCaseCharacters
    }  

    var passwordGenerated = "";
          for(var i = 0; i < lengthOfPassword; i++) {
              var value = Math.floor(Math.random() * characters.length);
              passwordGenerated = passwordGenerated + characters[value];
            }

            return passwordGenerated;
          }

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);