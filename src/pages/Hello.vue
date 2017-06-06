<template>
  <section class="hello">
    <p>欢迎 {{ msg }}!</p>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Henry'
    }
  }
}
</script>
