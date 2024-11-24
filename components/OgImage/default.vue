<script setup lang="ts">
	withDefaults(
		defineProps<{
			title?: string;
			description?: string;
			link?: string;
		}>(),
		{
			title: 'title',
			description: 'description',
			link: 'yourwebsite.com',
		},
	);
</script>

<template>
	<div class="border-[12px] border-solid border-blue-500 bg-gray-50">
		<div class="flex h-full w-full flex-col justify-between p-20">
			<h1 class="text-6xl font-black">
				{{ title }}
			</h1>

			<p class="text-4xl font-semibold">
				{{ description }}
			</p>

			<p class="text-2xl">{{ link }}</p>
		</div>
	</div>
</template>
