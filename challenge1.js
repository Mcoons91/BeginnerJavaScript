//Exercise to swap lowercase first letter for uppercase and to ensure that the rest of the name presents in lowercase despite user input.

//1. prompt for first name data
var firstName = prompt("What is your name?");

//2. splice string with variables for upper case letter
var firstChar = firstName.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,firstName.length.toLowerCase);

var capitalisedName = upperCaseFirstChar + restOfName;

alert("Hello, " + capitalisedName);