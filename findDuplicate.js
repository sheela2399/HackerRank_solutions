/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let seen = new Set();
    
    for (let i=0; i<nums.length; i++){
        if(seen.has(nums[i])){
             return nums[i];
        }
        seen.add(nums[i])
    }
    return -1;
};


// for multiple duplicates 
var findDuplicate = function(nums) {
    let seen = new Set();
    let Duplicate = [];
    
    for (let i=0; i<nums.length; i++){
        if(seen.has(nums[i])){
             Duplicate.push(nums[i]);
        }
        else { seen.add(nums[i])}
    }
    return Duplicate;
};

console.log(findDuplicate([1,3,4,1,2,3])); 
// output 1 only first duplicate


// output [1,3] for multiple
