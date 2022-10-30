<script setup>
	import instance from './../axios.js'

	instance.get('/articles').then((response) => console.log(response))
</script>

<template>
	<section class="articles-wrapper"></section>
</template>

<style scoped></style>
