<template>
  <div>
    <Head>
      <Title> Empty layout </Title>
    </Head>
    <the-page-header title="Empty page">
      <template #description>
        Here we have redefined the <code>layout</code>
      </template>
    </the-page-header>
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
