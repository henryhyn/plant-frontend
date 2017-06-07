<template>
  <section class="hello">
    <h4>文本插值</h4>
    <p>欢迎 {{ msg }}!</p>
    <p>也可以这样绑定 <span v-text='msg'/></p>

    <h4>绑定 DOM 元素属性</h4>
    <p v-bind:title='message'>鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
    <p :title='message'>鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>

    <h4>条件</h4>
    <p v-if="seen">现在你看到我了</p>
    <p v-show="!seen">现在你看到我了</p>

    <h4>循环</h4>
    <ol>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>

    <h4>处理用户输入</h4>
    <input v-model="msg"/>
    <button v-on:click="reverseMessage">逆转消息</button>
    <button @click="reverseMessage">逆转消息</button>

    <h4>组件化应用构建</h4>
    <card/>
    <ol>
      <todo-item key="item" v-for="item in todos" :todo="item"/>
    </ol>

    <h4>动态加载数据</h4>
    <ol>
      <li v-for="item in list">{{ item.name }}</li>
    </ol>
</section>
</template>

<script>
import Card from '@/components/Card'
import TodoItem from '@/components/TodoItem'
import Hex from '@/utils/Hex'

export default {
  name: 'hello',
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  components: {
    Card,
    TodoItem
  },
  mounted: function () {
    Hex.get('/api/plants', {page: 2}, d => this.$set(this, 'list', d.list))
  },
  data () {
    return {
      list: [],
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      msg: 'Henry',
      message: '页面加载于 ' + new Date()
    }
  }
}
</script>
