//  gets a handle in the text area, so we can display the password in it, instead of doing it with a window alert.
var generateBtn = document.querySelector("#generate");

// it activates the functions declared when the user clicks on the red button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 
  function generatePassword() {
    
    // the following arrays contains the kind of characters and the user choices for the type of characters they would like to append to their password.
    var valuetype = ["UPPERCASE", "lowercase", "number", "symbol"];
    var lowercaseG = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var UPPERCASEG = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P" ,"Q", "R", "S" ,"T" ,"U" ,"V", "W", "X" ,"Y" ,"Z" ];
    var NumberG = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var SpecialG = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "<", ">", "?", ":", "[","]",  "{", "-", "=", "}", "<", "/", ">", ".", "'"];

    // this empty variables are responsible for saving the user choices, depending of what they choose, their final value changes.
     var finalproduct= [];
     var pswordstring = "";

    //  this variable stores the responsible function to collect the desired lenght from the user, and it is just declared within the Generate password function
    // to have a more clean code.
     var passowrdlength = generatepasswordlenght();


    //  this loop prompts the user asking what type of characters do they want in their password, making sure that they also select at least 1 data type
       for (let i = 0; i < valuetype.length; i++) {
       valuetype [i] = confirm("would you like to include " + valuetype[i] + " characters in your password?")
       }

    if (valuetype [0] === false && valuetype [1] === false && valuetype [2] === false && valuetype [3] === false){
        alert("Heey! That was not supposed to happen, please select at least 1 character type");
         } 

        //  the following if statements appends the character type arrays depending of the user choices to the empty finalproduct var, creating a whole single one.
         
    if (valuetype [0] === true){
      finalproduct = finalproduct.concat(UPPERCASEG);}

    if (valuetype [1] === true){
      finalproduct = finalproduct.concat(lowercaseG);}

    if (valuetype [2] === true){
        finalproduct = finalproduct.concat(NumberG);}

    if (valuetype [3] === true){
          finalproduct = finalproduct.concat(SpecialG);}

       console.log(finalproduct);

      //  this for loop make sure that the lenght is properly applied and also that selects the random characters from the finalproduct array

       for (var i = 0; i < passowrdlength; i++) {
          pswordstring += finalproduct[Math.floor(Math.random() * (finalproduct.length))];}
         return pswordstring;
        }
        
        // with this function we recolect what is the desired lenght from the user, and create a loop with the isNaN method to make sure that the value is just a number
        // from 8 to 128 and not something else
  function generatepasswordlenght () {        
        var choice = 0;
        while ((choice < 8) || (choice > 128) ) {

         choice = parseInt (prompt("how many characters do you want in your password ( 8 - 128 )"));

         if (isNaN(choice)) {
            choice = 0;}
        }
        return choice;
       }
    

