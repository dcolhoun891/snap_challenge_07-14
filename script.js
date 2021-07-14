/*Function #1 Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.) Which operation is your choice.*/

function multiplyTwoNumbers (number1, number2) {
   console.log("first number", number1);
   console.log("second number", number2);

    // var result = number1 * number2;
   let result = number1 * number2; //the correct way
    return result;
}
let number1 = 5;
let number2 = 20;
let answer = multiplyTwoNumbers(number1, number2);
console.log("The answer is: ", answer);

/* Function #2
Take two strings as arguments and return a value that has them concatenated.*/

const value = "A string";
"I am" + value + "Isn't JS fun?";
`I am ${value} Isn't JavaScript fun?`;

function combineTwoStrings (string1, string2) {

    return string1 + string2;
}

console.log (combineTwoStrings("Javascript is to carpet as ", "Java is to car."));