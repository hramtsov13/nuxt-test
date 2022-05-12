<template>
  <div>
    <Head>
      <Title> About </Title>
    </Head>
    <div class="mb-14 border-b border-b-gray-300 pb-6">
      <h1 class="font-bold text-[2.5rem]">About page</h1>
      <p class="text-gray-500 text-[1rem]">
        Here we have redefined the <code>layout</code>
      </p>
    </div>
    <NuxtLink class="py-2 px-6 bg-gray-300 rounded-md" to="/home">
      Go Back Button
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
</script>
