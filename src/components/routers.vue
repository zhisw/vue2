<template>
	<div class="routers">
		  <router-link to="/">Home</router-link>
	    <router-link to="/bar/thisId">Go to Bar</router-link>
	    <router-link to="/test1">Go to test1</router-link>
	    <router-link to="/bar/thisId/BarChild">Go to BarChild</router-link>
	    <router-link to="/test2">Go to test2</router-link>
	</div>
</template>	
<script>
export default {
  name: 'routers',
  data () {
    return {
      msg: 'vue-tests'
    }
  }
}
</script>
