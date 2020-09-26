// 706. 设计哈希映射
// 不使用任何内建的哈希表库设计一个哈希映射

// 具体地说，你的设计应该包含以下的功能

// put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
// get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
// remove(key)：如果映射中存在这个键，删除这个数值对。
/**
 * Initialize your data structure here.
 */

// 拉链法 桶用数组实现

// 建立哈希表 用数组每一项存储每一个哈希值对应链表
var MyHashMap = function() {
  const hash = new Array(2069)
  for(var i = 0; i < hash.length; i++){
    hash[i] = []
  }
  this.hash = hash
};


// 链表的每一项值
// function LinkNode(key, value) {
//   this.key = key
//   this.value = value
//   this.next = null
// }

function getIndex(key) {
  const N = 2069
  return key % N
}

MyHashMap.prototype.put = function(key, value) {
  const index = getIndex(key) // 获取哈希索引
  
  //如果当前索引对应的桶里面没有值， 直接放入 
  if(this.hash[index].length === 0) {
    this.hash[index].push([key, value])
    return
  }

  // 否则先遍历该桶，判断是否已有对应的key， 如果有就更新key
  for(var i = 0; i < this.hash[index].length; i++) {
      let tuple = this.hash[index][i]
      if(tuple[0] === key) {
          tuple[1] = value
          return
      }
  }
  // 如果桶中没有新加的key值，那就把key加入
  this.hash[index].push([key, value])
};


MyHashMap.prototype.get = function(key) {
  const index = getIndex(key) // 获取哈希索引

  for(var i = 0; i < this.hash[index].length; i++) {
      let tuple = this.hash[index][i]
      if(tuple[0] === key) {
          return tuple[1]
      }
  }
  return -1
};


MyHashMap.prototype.remove = function(key) {
  const index = getIndex(key) // 获取哈希索引
  for(var i = 0; i < this.hash[index].length; i++) {
    let tuple = this.hash[index][i]
    if(tuple[0] === key) {
       this.hash[index].splice(i, 1)
    }
}
};

var hashMap = new MyHashMap()
hashMap.put(1, 1)
hashMap.put(2, 2)
hashMap.put(2, 1)
hashMap.remove(2)
hashMap.get(2)
console.log(hashMap.get(2));