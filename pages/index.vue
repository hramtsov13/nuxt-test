<script setup lang="ts">
	import usePostsStore from '~/stores/posts/index';

	defineOgImageComponent('default', {
		title: 'Custom title',
		description: 'Custom description',
	});

	useSeoMeta({
		title: 'Nuxt 3 Boilerplate',
		description: 'This is a really perfomant and scalable Nuxt 3 boilerplate',
	});

	const postsStore = usePostsStore();

	await useAsyncData('posts', async () => {
		await postsStore.fetchAllPosts();

		return postsStore.posts;
	});
</script>

<template>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<div v-for="post in postsStore.posts" :key="post.id" class="rounded-md border border-gray-400 px-4 py-6 pb-20">
			<h2 class="mb-2 text-sm font-semibold leading-4">
				{{ post.title }}
			</h2>

			<p class="text-muted-foreground">
				{{ post.body }}
			</p>
		</div>
	</div>
</template>
