<template>
  <section class="hello">
    <p>欢迎 {{ msg }}!</p>
    <p>也可以这样绑定 <span v-text='msg'/></p>
    <p v-bind:title='message'>鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Henry',
      message: '页面加载于 ' + new Date()
    }
  }
}
</script>
