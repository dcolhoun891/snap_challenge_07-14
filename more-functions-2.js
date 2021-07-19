//Write a function that finds the sum of all positive factors of a number.

const factor = function (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0)
        sum = sum + i;

    }  //for loop

    return sum;
}  //function

console.log(factor(29));