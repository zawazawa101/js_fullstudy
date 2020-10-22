import { defineComponent, h } from 'vue'


export default function (Com) {
  return defineComponent({
    // render 返回就是 该组件需要渲染的
    // render() {
    //   return <h3>hhhh</h3>
    // }
    render() {
      // return h('h3', {}, ['hhh'])
      return h('div',
        {
          onTouchmove: this.handleMove,
          style: {
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px'
          }
        }, [h(Com)])
      // 在h的回调函数里 加入拖拽的行为
      // 当然也可以在h中放入 任何想实现的行为
    },
    data() {
      return {
        x: 150,
        y: 150
      }
    },
    methods: {
      handleMove(e) {
        console.log(1);
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;
        this.x = x;
        this.y = y;
      }
    }
  })

}
