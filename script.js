//variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
var numeric = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9'];
var questions = [
    {q:'How many characters would you like your password to contain?', a: true},
    {q:'Do you want to include special characters?', a: true}
    {q:''}
];

//functions
function generate(){

    var allcharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var password = "";   

    function randomize() {
        for (var i = 0; i < allcharacters; i++) {
             var allcharacters = Math.floor(Math.random() * totalArray.length);
    }
    
    function randomize() {
        var passwordArray = [];
        for (var i = 0; i < allcharacters; i++) {
             var allcharacters = Math.floor(Math.random() * totalArray.length);
             passwordArray.push(allcharacters);
        }
    }

var generatePasswordbutton = document.getElementsByClassName("generate-password")[0];
// generatePasswordbutton.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log(event);
// });

generatePasswordbutton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event);
});

var totalArray = []
    console.log(totalArray);
    
   

//functions
function generateUpper() {
alert (length)
}
function generateLower() {

}

function generateSpecialCharacters() {

}

function generateNumeric() {

}

function copytoClipboard() {

    document.getElementById("display").select();
    
    document.execCommand("Copy");

    alert("Your password has been copied to the clipboard!")
}

function randomize() {
    for (var i = 0; i < characters; i++) {
         var chooseCharacters = Math.floor(Math.random() * totalArray.length);
}

function randomize() {
    var passwordArray = [];
    for (var i = 0; i < characters; i++) {
         var chooseCharacters = Math.floor(Math.random() * totalArray.length);
         passwordArray.push(chooseCharacters);
    }
}



// Prompt length
// Check  8 < length < 128
// confirm hasSpecialCHaracters
// confirm hasUpperCase
// confirm hasLowerCase
// confirm hasNumeric
