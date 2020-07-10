# 浮动 float
浮动会让元素脱离文档流，间接导致父容器高度坍塌
应用场景 文字环绕图片 块级元素排成一行

# 清除float带来的影响
1.  在浮动元素后面添加一个空容器 <div style="clear: left;" ></div>

2. 给浮动元素父容器添加一个伪类
 .clearFix::after{
            display: block;
            content: '';
            clear: both;
        }

3. BFC block Flormatting Context        
解决元素脱离文档流带来的影响,margin重叠问题