<script setup lang="ts">
	defineOgImageComponent('default', {
		title: 'About page',
	});

	useSeoMeta({
		title: 'About',
		description: 'Read about us',
	});
</script>

<template>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<div>About</div>
	</div>
</template>
