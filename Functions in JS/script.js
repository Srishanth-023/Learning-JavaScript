console.log("Welcome to the section: Functions");


// FUNCTIONS


// A simple function

// Function Declaration
function square(number){
    return number * number;
}

// Function Expression / Calling / Invoking
const result = square(5);
console.log(result);


// Ways of declaring a function

// 1. A Function Declaration
function functionName1(params){
    // Code to be executed
}

// 2. A Funtion Expression
const functionName2 = function(params){
    // Code to be executed
}

// 3. An Arrow Function
const functionName3 = (params) => {
    // Code to be executed
}


// Examples with functions

// 1
function sayHi(name){
    console.log(`Hi, ${name}!`);
    // console.log("Hello " + name);
}

sayHi("Sri");
sayHi("Nene");

// 2
function add(num1, num2){
    return num1 + num2;
    return 'RETURNED';
}

const sum = add(1, 2);
console.log(sum);

// 3
function testMultipleRetrun(){
    return true;
    return false;
}

const bool = testMultipleRetrun();
console.log(bool);


// Arrow Functions

const square1 = (number) => {
    return number * number;
}

const square2 = (number) => number * number;

const square3 = number => number * number; // Single parameter doesn't require a set of paranthesis.


const result1 = square1(5);
const result2 = square2(10);
const result3 = square3(15);

console.log(result1);
console.log(result2);
console.log(result3);
