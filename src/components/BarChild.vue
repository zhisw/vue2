<template>
  <div class="hello">
     <routers></routers>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import routers from './routers'
export default {
  name: 'BarChild',
  data () {
    return {
      msg: 'vue-BarChild'
    }
  },
  template: '<routers/>',
  components: { routers }
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
