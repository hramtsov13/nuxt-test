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
  <div>{{ postsStore.posts }}</div>
</template>
