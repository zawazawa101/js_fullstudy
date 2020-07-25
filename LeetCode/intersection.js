/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 349. 两个数组的交集
 * 题目描述给定两个数组，编写一个函数来计算它们的交集。
 */
var intersection = function(nums1, nums2) {
   var commonNum = []
   for(var i = 0;i < nums1.length; i++){
      if(commonNum.indexOf(nums1[i]) == -1){
        for(var j = 0; j < nums2.length; j++){
          if(nums1[i] == nums2[j]){
            commonNum.push(nums1[i])
            break
          }
        }
      }
   }
   return commonNum
};
console.log(intersection([4,9,5],[9,4,9,8,4]))