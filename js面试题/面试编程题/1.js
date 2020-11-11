// 4个奖品类型，一等奖概率1%，二等奖概率3%，三等奖概率6%，参与奖90%，设置如下

const model = [

{ name: '一等奖', key: 'level1', radio: 1, },

{ name: '二等奖', key: 'level2', radio: 3, },

{ name: '三等奖', key: 'level3', radio: 6, },

{ name: '参与', key: 'level4', radio: 90 }

];

class Draw {
  constructor(model) {
    this.model = model
  }
  random() {
    const num = Math.random() * 100 + 1
    if(num == 1) {
      return this.model[0]
    } else if (1 < num && num <= 4 ) {
      return this.model[1]
    } else if(4 < num && num <= 10) {
      return this.model[2]
    } else return this.model[3]
  }
} // 补充 Draw 的实现

const draw = new Draw(model);

const result = draw.random();
console.log(result);
