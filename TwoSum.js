/*https://leetcode.com/problems/two-sum/
*/
var twoSum = function(nums, target) {
// Solution 1
// for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

//Solution 2
const map = {};
  for (let i = 0; i < nums.length; i++) {
      const second_number = target - nums[i];
        if (second_number in map) {
        return [map[second_number], i];
        }
    map[nums[i]] = i;
    }
  return null;
};

console.log(twoSum([2,7,11,15],26));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([4,4], 8));