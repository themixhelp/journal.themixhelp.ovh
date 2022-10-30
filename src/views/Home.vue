<script setup>
	import Navbar from './../components/Navbar.vue'
	import ArticlesList from '../components/ArticlesList.vue'
</script>

<template>
	<section class="home-wrapper">
		<Navbar />

		<section>
			<p class="info">wybierz interesujący Cię artykuł:</p>
			<ArticlesList />
		</section>

		<footer>themixhelp, wszelkie prawa zastrzeżone</footer>
	</section>
</template>

<style scoped>
	.home-wrapper {
		min-height: calc(100vh - (2 * 2rem));

		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	.home-wrapper .info {
		padding-bottom: 0.75rem;

		font-size: 1.35rem;
		font-weight: 700;
	}

	footer {
		padding-top: 1.5rem;

		text-align: center;

		color: var(--grey);
	}
</style>
