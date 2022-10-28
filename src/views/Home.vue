<script setup>
	import Navbar from './../components/Navbar.vue'
</script>

<template>
	<section class="home-wrapper">
		<Navbar />

		<section>
			<p>wybierz interesujący Cię artykuł:</p>
			<!-- <p>[29.10.2022] >>> { To pierwszy post! }</p> -->
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

	footer {
		padding-top: 1.5rem;

		text-align: center;

		color: var(--grey);
	}
</style>
