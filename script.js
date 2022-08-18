
// Assignment Code

var Upper_Code = arrayFromLowToHigh(65, 90)
var Lower_Code = arrayFromLowToHigh(97, 122)
var Number_Code = arrayFromLowToHigh(48, 57)
var Special_Code = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

// generate password

var generateBtn = document.querySelector("#generate");

function generatePassword(plength, lowercaseQ, uppercaseQ, numericQ, specialQ) {

    var lengthQ = window.prompt("Length of Password?", "Choose a number from 8 to 128");
    var plength = parseInt(lengthQ);

    // check for input type and range
    if (plength < 8 || plength > 129) {
        alert("Please chose between 8 and 128")
        return;
    }

    if (isNaN(plength)) {
        alert("This is not a number!")
        return;
    }

    // var lowercaseQ = confirm("If you want to include lowercase, click OK");
    var lowercaseQ = confirm("If you want to include lowercase, click OK");
    var uppercaseQ = confirm("If you want to include uppercase, click OK");
    var numericQ = confirm("If you want to include numbers, click OK");
    var specialQ = confirm("If you want to include special characters, click OK");

    // check for input - chose at lease one
    if (lowercaseQ == false && uppercaseQ == false && numericQ == false && specialQ == false) {
        alert("Please chose at lease one type of password!")
        return;
    }

    // create new variable to concat password array
    var newCodes = [];
    if (lowercaseQ) { newCodes = newCodes.concat(Lower_Code) }
    if (uppercaseQ) { newCodes = newCodes.concat(Upper_Code) }
    if (numericQ) { newCodes = newCodes.concat(Number_Code) }
    if (specialQ) { newCodes = newCodes.concat(Special_Code) }

    // generate random p.w and limit the length by input
    var passwordCharacters = [];
    console.log(passwordCharacters)


    for (var i = 0; i < plength; i++) {
        var character = newCodes[Math.floor(Math.random() * newCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join('')

}




// function to create character codes array
function arrayFromLowToHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if (password) {
        passwordText.value = password;
    }
}

// Add event listner to generate button

generateBtn.addEventListener("click", writePassword);

