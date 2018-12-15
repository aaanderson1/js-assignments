/*
 * Basics
 *
 * 
 */

// return the sum of a and b
function sum(a, b) {

}

// return the value of a or b that is lowest
function min(a, b) {

}

// return the value of a or b that is highest
function max(a, b) {

}

// return the sum of the numbers in the array
function sumArray(numbers) {
    
}

// return the lowest value in the array
function minInArray(numbers) {

}

// return the highest value in the array
function maxInArray(numbers) {

}

// return how many times the numberToFind occurs in the numbers array
function numberFoundInArray(numbers, numberToFind) {

}

function validate(input, comparer) {
    if (input !== comparer) {
        return "Failed";
    }
    return "Passed";
}

function runTests(group, func, inputs, expected) {
    let output = `${group}: \n`;
    for (let i = 0; i < inputs.length; ++i) {
        let result = func(...inputs[i]);
        output += `${validate(expected[i], result)} :-> ${inputs[i]} -> Expected: ${expected[i]} | Received: ${result}\n`;
    }

    return output;
}

function wrapArgs(func) {
    return function() {
        return func(Array.from(arguments));
    }
}

let output = "";
// sum tests
output += runTests('sum', sum, [
    [1, 2],
    [3, 7],
    [20, 34]
], [
    3,
    10,
    54
]) + '\n';

// min tests
output += runTests('min', min, [
    [1, 2],
    [4, 2],
    [20, 34]
], [
    1,
    2,
    20
]) + '\n';

// max tests
output += runTests('max', max, [
    [1, 2],
    [4, 2],
    [20, 34]
], [
    2,
    4,
    34
]) + '\n';

// sumArray tests
output += runTests('sumArray', wrapArgs(sumArray), [
    [1, 2, 3, 4, 5],
    [10, 12, 14, 16, 18, 20],
    [1, 1, 2, 3, 5, 8, 13]
], [
    15,
    90,
    33
]) + '\n';

// minInArray tests
output += runTests('minInArray', wrapArgs(minInArray), [
    [1, 2, 3, 4, 5],
    [10, 12, 14, 16, 18, 20],
    [1, 1, 2, 3, 5, 8, 13],
    [10, 9, 8, 7, 6]
], [
    1,
    10,
    1,
    6
]) + '\n';

// maxInArray tests
output += runTests('maxInArray', wrapArgs(maxInArray), [
    [1, 2, 3, 4, 5],
    [10, 12, 14, 16, 18, 20],
    [1, 1, 2, 3, 5, 8, 13],
    [10, 9, 8, 7, 6]
], [
    5,
    20,
    13,
    10
]) + '\n';

// numberFoundInArray tests
output += runTests('numberFoundInArray', wrapArgs(numberFoundInArray), [
    [[1, 2, 3, 4, 5], 2],
    [[10, 12, 14, 12, 12, 20], 12],
    [[1, 1, 2, 3, 5, 8, 13], 1],
    [[1, 2, 2, 2, 1, 2, 1], 1],
    [[2, 2, 2, 3, 3, 3, 4, 4, 4], 5],
    [[], 2]
], [
    1,
    3,
    2,
    3,
    0,
    0
]) + '\n';
console.log(output);