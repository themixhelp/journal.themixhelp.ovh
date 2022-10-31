<script setup>
	import { RouterLink } from 'vue-router'
	import AppearanceSwitcher from './AppearanceSwitcher.vue'

	const props = defineProps({
		renderArticleNavbar: {
			type: Boolean,
			required: true,
		},
	})
</script>

<template>
	<section class="navbar-wrapper">
		<h1>themixhelp!</h1>

		<aside>
			<AppearanceSwitcher />

			<a v-if="!renderArticleNavbar" href="https://github.com/themixhelp/journal.themixhelp.ovh">github</a>
			<RouterLink v-if="renderArticleNavbar" to="/">strona główna</RouterLink>
		</aside>
	</section>
</template>

<style scoped>
	.navbar-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding-bottom: 1.5rem;

		font-size: 1.25rem;
	}

	.navbar-wrapper h1 {
		font-size: 2rem;
	}

	.navbar-wrapper aside {
		display: flex;

		margin-left: 0.75rem;
	}

	.navbar-wrapper aside * {
		position: relative;

		margin-left: 1rem;
		padding-bottom: 0.5rem;
	}

	.navbar-wrapper aside *::before {
		content: '';

		display: block;
		width: 100%;
		height: 3px;

		position: absolute;
		bottom: 0;

		background-color: var(--green);

		border-radius: 8px;

		transform: scaleX(0);
		transform-origin: right;

		transition: transform 300ms;
	}
	.navbar-wrapper aside *:hover::before {
		transform: scaleX(1);
		transform-origin: left;
	}
</style>
