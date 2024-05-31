/*


*/
// var intToRoman = function(num) {
// const roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
// const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// let result = '';
// while (num !== 0) {
//     for (let i = 0; i < roman.length; i++) {
//         if (num >= n[i]) {
//             result += roman[i];
//             num -= n[i];
//             break;
//             }
//         }
//     }
//     return result;
// }

var intToRoman = function(num) {
if(num <= 0) return "";
  const roman = ["M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = '';
      for(let i = 0; num != 0; i++){
          while(num >= n[i]){
              result += roman[i];
              num -= n[i];
          }
      }
  return result;
};
console.log(intToRoman("2024")); // MMXXIV
console.log(intToRoman("67")); // LXVII