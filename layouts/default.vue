<template>
  <div>
    <TheNavigation />

    <div class="container">
      <slot />
    </div>
  </div>
</template>


<style scoped>
.container {
  margin: 60px auto 0;
  padding: 1rem;
  max-width: 960px;
}
</style>