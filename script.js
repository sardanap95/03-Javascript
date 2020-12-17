var generateBtn = document.querySelector("#generate");
var passwordLength;
var hasLower;
var hasUpper;
var hasNumber;
var hasSpecial;
var userChoices;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

generateBtn.addEventListener("click", () => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});

const generatePassword = () => {
  passwordLength = prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");

  //Prompts for questions.

  if (!passwordLength) {
    alert("Required value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  } else {
    hasLower = confirm("Do you want to include lowercase letters?");
    hasUpper = confirm("Would you like to include uppercase letters?");
    hasNumber = confirm("Would you like to include numbers?");
    hasSpecial = confirm("Will it contain special characters?");
  }

  //Combinations of all the options.

  if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
    userChoices = alert("You must choose a criteria!");
  } else if (hasLower && hasUpper && hasNumber && hasSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
  } else if (hasLower && hasUpper && hasNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
  } else if (hasLower && hasUpper && hasSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
  } else if (hasLower && hasNumber && hasSpecial) {
    userChoices = lowerCase.concat(numbers, special);
  } else if (hasUpper && hasNumber && hasSpecial) {
    userChoices = upperCase.concat(numbers, special);
  } else if (hasLower && hasUpper) {
    userChoices = lowerCase.concat(upperCase);
  } else if (hasLower && hasNumber) {
    userChoices = lowerCase.concat(numbers);
  } else if (hasLower && hasSpecial) {
    userChoices = lowerCase.concat(special);
  } else if (hasUpper && hasNumber) {
    userChoices = upperCase.concat(numbers);
  } else if (hasUpper && hasSpecial) {
    userChoices = upperCase.concat(special);
  } else if (hasNumber && hasSpecial) {
    userChoices = numbers.concat(special);
  } else if (hasLower) {
    userChoices = lowerCase;
  } else if (hasUpper) {
    userChoices = blankUpper.concat(upperCase);
  } else if (hasNumber) {
    userChoices = numbers;
  } else if (hasSpecial) {
    userChoices = special;
  }

  var passwordBlank = [];

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

  var password = passwordBlank.join("");
  return password;
};
