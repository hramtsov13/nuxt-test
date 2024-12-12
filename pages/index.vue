<script setup lang="ts">
	import usePostsStore from '~/stores/posts/index';

	defineOgImageComponent('default', {
		title: 'Custom title',
		description: 'Custom description',
	});

	useSeoMeta({
		title: 'Main',
	});

	const postsStore = usePostsStore();

	await useAsyncData(
		'posts',
		async () => await Promise.allSettled([postsStore.fetchAllPosts(), postsStore.fetchAllUsers()]),
	);
</script>

<template>
	<div>
		<div class="mb-20">
			<p>
				Different sizes:
				<NuxtIcon name="uil:github" />
				<NuxtIcon name="uil:github" size="24" />
				<NuxtIcon name="uil:github" size="48" />
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<div v-for="post in postsStore.posts" :key="post.id" class="rounded-md border border-gray-400 px-4 py-6 pb-20">
				<h2 class="mb-2 text-sm font-semibold leading-4">
					{{ post.title }}
				</h2>

				<p class="text-muted-foreground">
					{{ post.body }}
				</p>
			</div>

			<div v-for="user in postsStore.users" :key="user.id" class="rounded-md border border-gray-400 px-4 py-6 pb-20">
				<h2 class="mb-2 text-sm font-semibold leading-4">
					{{ user.name }}
				</h2>

				<p class="text-muted-foreground">
					{{ user.company.name }}
				</p>
			</div>
		</div>
	</div>
</template>
