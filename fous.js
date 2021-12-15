
export default {
    directives: {
        focus: {
          // 指令的定义
          mounted(el) {
            el.focus()
          }
        }
      }
}