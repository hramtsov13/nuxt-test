<template>
  <div class="mb-14 border-b border-b-gray-300 pb-6">
    <h1 class="font-bold text-[2.5rem] mb-4">
      <span v-if="title">{{ title }}</span>
      <slot v-else name="title" />
    </h1>
    <p class="text-gray-500 text-[1rem]">
      <span v-if="description">{{ description }}</span>
      <slot v-else name="description" />
    </p>
  </div>
</template>

<script lang="ts" setup>
interface IPageHeaderProps {
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<IPageHeaderProps>(), {
  title: "",
  description: "",
});
</script>