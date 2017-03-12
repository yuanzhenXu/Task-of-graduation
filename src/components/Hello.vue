<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>
    <router-link to="/list">
        <li>我的问卷</li>
    </router-link>
    <router-link to="/new-qn">
        <li>新建问卷</li>
    </router-link>
    <router-view class= "new-qn"></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
}

a {
  color: #42b983;
}
</style>
