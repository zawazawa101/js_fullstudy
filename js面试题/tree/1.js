// 编程题：将数组转成树形结构的对象
// var locationList = [
//     { id: 0, name: "中国" },
//     { id: 1, pid: 0, name: "北京市" },
//     { id: 2, pid: 1, name: "昌平区" },
//     { id: 3, pid: 1, name: "海淀区" },
//   ];
//  for of 遍历   如果后面节点的pid 等于 前面的节点id 那么就把
// 后面节点的id插入到前面节点的sub属性上

var locationList = [
  { id: 0, name: "中国" },
  { id: 1, pid: 0, name: "北京市" },
  { id: 2, pid: 1, name: "昌平区" },
  { id: 3, pid: 1, name: "海淀区" },
  { id: 4, pid: 2, name: 'Pku'}
];
let root = null
for(let node of locationList) {
  if(node.pid !== undefined) {
    for(let parent of locationList) {
      if(parent.id == node.pid){
        if(!parent.sub){
          parent.sub = []
        } 
        parent.sub.push(node)
      }
    }
  }else {
    root = node
  }
     
}
console.log(root);