<template>
	<div class="vue-app">
		<h1>Vue App</h1>
	</div>
</template>

<script>
import APIURI from '../APIURI'

export default {
	mounted: function () {
		console.log(APIURI)
	}
}
</script>  

<style lang="scss">
.vue-app {
	h1 {
		display: inline-block;
		color: teal;
		border: 1px solid teal;
		padding: 0.3em 0.5em;
		background: orange;
	}
}
</style>