<template>
  <div class="hello">
    <router-link to="/">Home</router-link>
    <router-link to="/bar/thisId">Go to Bar</router-link>
    <router-link to="/test1">Go to test1</router-link>
    <router-link to="/bar/thisId/BarChild">Go to BarChild</router-link>
    <router-link to="/test2">Go to test2</router-link>
    <h1>{{ msg }} id:{{$route.params.id}}</h1>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      msg: 'vue-bar'
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
}

a {
  color: #42b983;
}
</style>
