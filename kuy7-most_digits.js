/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/
//SOLUTION:
const compareLength = (a, b) => (`${b}`.length > `${a}`.length ? b : a);
const findLongest = array => array.reduce(compareLength);
