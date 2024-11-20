<script setup lang="ts">
	import usePostsStore from '~/stores/posts/index';

	definePageMeta({
		layout: 'default',
	});

	const postsStore = usePostsStore();

	await useAsyncData('posts', async () => {
		await postsStore.fetchAllPosts();

		return postsStore.posts;
	});
</script>

<template>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<div v-for="post in postsStore.posts" :key="post.id" class="rounded-md border border-gray-400 px-4 py-6">
			<h2 class="mb-2 text-sm font-semibold leading-4">
				{{ post.title }}
			</h2>

			<p class="text-muted-foreground">
				{{ post.body }}
			</p>
		</div>
	</div>
</template>
