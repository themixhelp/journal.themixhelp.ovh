<script setup>
	import { ref } from 'vue'
	import { RouterLink } from 'vue-router'
	import { parseTimestamp } from './../utils/parseTimestamp.js'
	import instance from './../axios.js'

	const ARTICLES_DATA = ref([])
	let FAILED = ref({
		showInfo: false,
		errorCode: '',
	})

	instance
		.get('/articles')
		.then((response) => (ARTICLES_DATA.value = response.data.data))
		.catch((error) => {
			FAILED.value.showInfo = true
			FAILED.value.errorCode = error.response.status
		})
</script>

<template>
	<section class="articles-wrapper">
		<section v-for="{ attributes: { title, slug, publishedAt } } in ARTICLES_DATA">
			<RouterLink :to="slug">
				{{ `[${parseTimestamp(publishedAt)}] >>> ${title}` }}
			</RouterLink>
		</section>

		<p v-if="FAILED.showInfo">[{{ FAILED.errorCode }}] Wystąpił błąd! Spróbój ponownie później.</p>
	</section>
</template>

<style scoped></style>
