/**
 * @param {number[]} nums
 * @return {number}
 *  leetcode 26. 删除排序数组中的重复项
 */
var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length - 1; i++){
    for(let j = i+1; j < nums.length - 1; j++){
      if(nums[i] == nums[j]){
        nums.splice(j,1)
        j--
      }
    }
  }
  return nums.length
};
console.log(removeDuplicates([0,0,1,1,1,1,1,1,2,2,3,3,4]))
