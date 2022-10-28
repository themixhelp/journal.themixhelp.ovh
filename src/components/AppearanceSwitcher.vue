<script setup>
	const ROOT = document.querySelector('main')
	let STATE = localStorage.getItem('APPEARANCE') ? localStorage.getItem('APPEARANCE') : '0'

	if (STATE === '1') {
		ROOT.classList.add('inverted')
	}

	const switchAppearance = () => {
		ROOT.classList.toggle('inverted')

		STATE = STATE === '0' ? '1' : '0'
		localStorage.setItem('APPEARANCE', STATE)
	}
</script>

<template>
	<section @click="switchAppearance" class="appearance-wrapper">
		<span>zmień motyw</span>
	</section>
</template>

<style scoped>
	.appearance-wrapper {
		cursor: pointer;
	}
</style>
