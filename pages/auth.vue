<template>
  <div>
    <div class="mb-14 border-b border-b-gray-300 pb-6">
      <h1 class="font-bold text-[2.5rem]">Auth page</h1>
      <p class="text-gray-500 text-[1rem]">
        This page is closed by <code>middleware/auth</code>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>