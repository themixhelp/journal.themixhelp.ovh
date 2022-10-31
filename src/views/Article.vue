<script setup>
	import { ref } from 'vue'
	import { useRoute } from 'vue-router'
	import instance from './../axios.js'
	import Navbar from './../components/Navbar.vue'

	const SLUG = useRoute().params.slug
	const ARTICLE_DATA = ref([])
	let FAILED = ref({
		showInfo: false,
		errorCode: '',
	})

	instance
		.get(`/articles?filters[slug]=${SLUG}`)
		.then((response) => (ARTICLE_DATA.value = response.data.data[0].attributes))
		.catch((error) => {
			FAILED.value.showInfo = true
			FAILED.value.errorCode = error.response.status
		})
</script>

<template>
	<section class="article-wrapper">
		<Navbar :render-article-navbar="true" />

		{{ ARTICLE_DATA.title }}
		{{ ARTICLE_DATA.content }}

		<section v-if="ARTICLE_DATA.length === 0 || FAILED.showInfo">
			Wystąpił błąd... Nie znaleziono tego artykułu! Jesteś pewien, że taki istnieje?
		</section>
	</section>
</template>

<style scoped></style>
