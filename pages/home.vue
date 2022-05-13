<template>
  <div>
    <Head>
      <Title> HomePage </Title>
    </Head>
    <div class="mb-14 border-b border-b-gray-300 pb-6">
      <h1 class="font-bold text-[2.5rem]">Home page</h1>
      <p class="text-gray-500 text-[1rem]">
        Here we use <code>/plugins/test</code> and <code>/server/api/user</code>
      </p>
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Server/api</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <h2><strong> Nickname: </strong>{{ user.nickname }}</h2>
      <p><strong> Age: </strong>{{ user.age }}</p>
      <p><strong>Job: </strong>{{ user.job }}</p>
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Plugins/test</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      {{ $test() }}
    </div>
  </div>
</template>

<script setup>
const { data: user } = await useAsyncData("user", () => $fetch("/api/user"));
</script>
