<template>
  <div id="app">
    <header>
      <div id="logo">
        <img src="../assets/logo.png">
      </div>
    </header>
    <div id="main-body">
      <aside>
        <nav>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><router-link to="/contact">联系</router-link></li>
            <li><router-link to="/help">帮助</router-link></li>
          </ul>
        </nav>
      </aside>
      <article>
        <router-view/>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > header {
    height: 60px;
    > #logo {
      height: 60px;
      > img {
        height: 60px;
      }
    }
  }

  > #main-body {
    flex: 1;
    display: flex;

    > aside {
      width: 200px;
      background-color: gray;
    }

    > article {
      flex: 1;
      background-color: lightgray;
      overflow-y: scroll;

      > section {
        background-color: white;
        margin: 8px;
        padding: 8px;
      }
    }
  }
}
</style>
