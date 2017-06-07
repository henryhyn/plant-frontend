<template>
  <li class="hui-todo-item">
    {{ todo.text }}
  </li>
</template>

<script>
  export default {
    props: ['todo']
  }
</script>
