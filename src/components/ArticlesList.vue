<script setup>
	import { ref } from 'vue'
	import { DateTime } from 'luxon'
	import instance from './../axios.js'

	const ARTICLES_DATA = ref([])
	let FAILED = ref({
		showInfo: false,
		errorCode: '',
	})

	const parseTimestamp = (ISO_DATE) => {
		const { day, month, year } = DateTime.fromISO(ISO_DATE)

		return `${day}.${month}.${year}`
	}

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
		<section v-for="{ attributes: { title, publishedAt } } in ARTICLES_DATA">
			<p>[{{ parseTimestamp(publishedAt) }}] >>> {{ title }}</p>
		</section>

		<p v-if="FAILED.showInfo">[{{ FAILED.errorCode }}] Wystąpił błąd! Spróbój ponownie później.</p>
	</section>
</template>

<style scoped></style>
