// 不求最优， 仅仅求解就行


// 把求解问题分成若干个子问题
// 对每一个子问题求解，得到子问题的局部最优解
// 把子问题的局部最优解合成原来问题的一个解


// 迭代整个商品， 总质量小于背包的容量， 装入物品
// r如果物品完整装入背包，就将其价值和重量分别计算进已装的总价值 和 总质量
// 如果物品不能完整装入背包，就计算能够装入的比例r，计算 总价值 和 总质量

// function knapSark(capacity, values, weights) {
//   let n = values.length, load = 0, i = 0, val = 0; // load为已装的总重量， val为已装的总价值
//   for(i = 0; i < n && load < capacity; i++) {
//     if(weights[i] <= (capacity - load)) {
//       val += values[i]
//       load += weights[i]
//     } else {
//       let r = (capacity - load) / weights[i] 
//       val += r * values[i]
//       load += weights[i]
//     }
//   }

// }


// leetCode
// 455. 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 注意：

// 你可以假设胃口值为正。
// 一个小朋友最多只能拥有一块饼干。
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b) // 小朋友
  s.sort((a, b) => a - b) // 饼干
  let child = 0
  for(let i = 0; i < g.length; i++) {
    for(let j = 0; j < s.length; j++) {
      if(g[i] <= s[j]){
        child++
        s.splice(0, j+1)
        console.log(s);
        break
      }
    }
  }
  return child
};

console.log(findContentChildren([1,2,3], [3]));
