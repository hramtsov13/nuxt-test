<template>
  <div>
    <the-page-header title="Blocked page">
      <template #description>
        This page is blocked by <code>middleware/auth</code>
      </template>
    </the-page-header>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>