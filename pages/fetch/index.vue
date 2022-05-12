<template>
  <div>
    <Head>
      <Title> Fetch Data </Title>
    </Head>
    <div class="mb-14 border-b border-b-gray-300 pb-6">
      <h1 class="font-bold text-[2.5rem]">Fetch page</h1>
      <p class="text-gray-500 text-[1rem]">
        Here we use <code>useFetch/useAsyncData</code> and
        <code>router.push</code> to specific route
      </p>
    </div>
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
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const apiURL =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

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
