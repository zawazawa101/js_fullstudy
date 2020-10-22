<template>
  <div>
    <!-- fragment -->
    <h2 @touchmove="handleMove" 
          :style="{left: `${x}px`, top: `${y}px`, position: 'absolute'}">拖拽</h2>
    <DragAble />
  </div>
</template>

<script>
// 如果另一个组件也要实现这个拖拽功能怎么办
// 复用：vue2.0 minIn  高阶组件   vue 3.0 compition
// 函数式编程: 高阶组件=高阶函数 curry ...
import withDrag from '../withDrag'
import Txt from './txt'
// 一段普通的文本 <div>dfdfdf</div>
const DragAble = withDrag(Txt)//<div @touchmove="handleMove"><div>dfdfdf</div><div>
export default {
  components: {
    DragAble: DragAble,
  },
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    handleMove(e) {
      const x = e.touches[0].pageX // 取第一根手指
      const y = e.touches[0].pageY;
      this.x = x
      this.y = y
    }
  }
}
</script>

<style>

</style>