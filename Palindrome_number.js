/*https://leetcode.com/problems/palindrome-number/
*/
/**
 * @param {number} x
 * @return {boolean}
 */

/*Solution 1
var isPalindrome = function(x) {
    if (x < 0) return false;
      return x.toString().split('').reverse().join('') === x.toString(); 
};


Solution 2*/

// var isPalindrome = function(x) {
//     let y = 0;
//     let z = x;
//     if (x < 0) return false; 

//     while (x > 0)
//     {
//         y = y * 10 + x % 10;  
//         x = parseInt( x/10);
//     }
//    return y==z;
// };

//Solution 3
var isPalindrome = function(x) {
    if (x < 0) return false;
    number_as_array = [];
    x = Math.abs(x);
    while (x > 0) {
        number_as_array.push(x % 10);
        x = Math.floor(x / 10);
    }
    
    arr_size = number_as_array.length;
    for (i = 0; i < arr_size / 2; i++) {
        if (number_as_array[i] != number_as_array[arr_size-1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));