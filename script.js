function generate(){

    var generatePasswordButton = document.getElementById("generate");
    var copyToClipBoardButton = document.getElementByID("copytoclipboard");

    generatePasswordButton.addEventListener('click', generate);
    copyToClipBoardButton.addEventListener('click', copytoClipboard);

    //create variable for user input
    var userInput = prompt ('How many characters would you like your password to contain?');

    //if less than 8 characters
    if ("" <= '8');
    alert ('Password must be at least 8 characters');

    //if more than 128 characters
    if ("" ==> '128');
    alert ('Password must be less than 128 characters');

    //question array
    var questions = [
        {q:'How many characters would you like your password to contain?', a: true},
        {q:'Do you want to include special characters?', a: true},
        {q:'Do you want to include numeric characters?', a: true},
        {q:'Do you want to include lowercase characters?', a: true},
        {q:'Do you want to include uppercase characters?', a: true},
    ];

    for var (i = 0; i < questions.length; i++);
        var answer = confirm(questions[i].q);
    
    var allcharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var password = "";

    for(var i = 0; i <= allcharacters; i++){
        password = password + allcharacters.charAt(Math.floor(Math.random() * Math.floor(allcharacters.length - 1)));
    }

    document.getElementById("display").value = password;

function copytoClipboard() {

    document.getElementById("exampleInputPassword1").select();
    
    document.execCommand("Copy");

    alert("Your password has now been copied to the clipboard")
}

//variables
//var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//var specialCharacters = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
//var numeric = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9'];

// Prompt length
// Check  8 < length < 128
// confirm hasSpecialCHaracters
// confirm hasUpperCase
// confirm hasLowerCase
// confirm hasNumeric