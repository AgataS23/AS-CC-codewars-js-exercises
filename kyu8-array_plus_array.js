/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/
//SOLUTION:
function arrayPlusArray(arr1, arr2) {
    var bigArray = arr1.concat(arr2);
     return bigArray.reduce(function(prevVal, curVal) {
      return prevVal + curVal;
    }, 0);
  }