<script setup>
	import { ref } from 'vue'

	const ROOT = document.querySelector('main')
	let STATE = ref(localStorage.getItem('APPEARANCE') ? localStorage.getItem('APPEARANCE') : '0')

	if (STATE.value === '1') {
		ROOT.classList.add('inverted')
	}

	const switchAppearance = () => {
		ROOT.classList.toggle('inverted')
		ROOT.classList.add('inverted-transition')

		STATE.value = STATE.value === '0' ? '1' : '0'
		localStorage.setItem('APPEARANCE', STATE.value)
	}
</script>

<template>
	<section @click="switchAppearance" class="appearance-wrapper">
		<span>tryb {{ STATE === '0' ? 'nocny' : 'dzienny' }}</span>
	</section>
</template>

<style scoped>
	.appearance-wrapper {
		cursor: pointer;
	}
</style>
