<template>
  <div>
    <h1>Auth</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>