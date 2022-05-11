<template>
  <div>
    <Head>
      <Title> HomePage </Title>
    </Head>
    <h1 class="text-red font-bold">Index Page</h1>

    <div class="card">
      <h2>{{ user.name }}</h2>
      <p><strong> Age: </strong>{{ user.age }}</p>
      <p><strong>Job: </strong>{{ user.job }}</p>
    </div>

    <h2>
      {{ $test() }}
    </h2>
  </div>
</template>

<script setup>
import "../assets/css/tailwind.css";
const { data: user } = await useAsyncData("user", () => $fetch("/api/user"));
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 40px;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fef;
}
</style>