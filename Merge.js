var merge = function(nums1, m, nums2, n) {
     for (let i = m; i<m+n-1; i++) {
        for (let j = 0; j<n;  j++){
        nums1[i] = nums2[j];
        i++;
    }}

     return nums1;
}


console.log(merge([1,2,3,0,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0));// [1]
console.log(merge([0], 0, [1], 1))// [1]