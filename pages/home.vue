<template>
  <div>
    <Head>
      <Title> HomePage </Title>
    </Head>
    <the-page-header
      title="Nuxt 3"
      description="Demo of the necessary nuxt 3 features"
    />

    <h2 class="font-bold text-[1.6rem] mb-5">Server folder</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <h2>
        <strong> Nickname: </strong>
        <NuxtLink
          to="https://github.com/hramtsov13/nuxt-test"
          target="_blank"
          >{{ user.nickname }}</NuxtLink
        >
      </h2>
      <p><strong> Age: </strong>{{ user.age }}</p>
      <p><strong>Job: </strong>{{ user.job }}</p>
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Plugins folder</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      {{ $test() }}
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Fetch Some data</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <p class="mb-4 text-gray-600 text-[1.2rem]">
        Click on any row of the table to navigate among dynamically created
        routes
      </p>
      <div class="w-full">
        <div class="flex justify-between">
          <div
            v-for="(header, index) in tableHeaders"
            :key="index"
            class="p-2.5 flex-1 text-center border border-gray-300"
          >
            {{ header }}
          </div>
        </div>
        <div
          v-for="(item, index) in data.data"
          :key="index"
          class="
            flex
            justify-between
            hover:cursor-pointer
            transform
            transition
            duration-300
            hover:scale-105
          "
          @click="openPopulationPage(item)"
        >
          <div
            class="p-2.5 flex-1 text-center border border-gray-300"
            v-for="(cell, index) in item"
            :key="index"
          >
            {{ cell }}
          </div>
        </div>
      </div>
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Page with another layout</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <the-button>
        <NuxtLink to="/empty"> Go to the page with empty layout </NuxtLink>
      </the-button>
    </div>

    <h2 class="font-bold text-[1.6rem] mb-5">Page blocked by middleware</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <the-button>
        <NuxtLink to="/blocked"> Try to go to the blocked page </NuxtLink>
      </the-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const apiURL =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

//For Server/api
const { data: user } = await useAsyncData("user", () => $fetch("/api/user"));

//For Fetch
// const { data } = await useAsyncData("usaData", () => $fetch(apiURL));
const { data } = await useFetch(apiURL, {
  transform(item) {
    console.log("item: ", item);
    return item;
  },
});

const tableHeaders = computed(() => {
  return Object.keys(data.value.data[0]);
});

const openPopulationPage = (populationItem) => {
  router.push({
    path: `/fetch/${populationItem.Population}`,
  });
};
</script>
