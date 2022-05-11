<template>
  <div>
    <Head>
      <Title> Youtube </Title>
    </Head>
    <h1>Youtube page</h1>
    <div class="table">
      <div class="table-row">
        <div
          v-for="(header, index) in tableHeaders"
          :key="index"
          class="table-cell"
        >
          {{ header }}
        </div>
      </div>
      <div
        v-for="(item, index) in data.data"
        :key="index"
        class="table-row"
        @click="$router.push('/api/' + item.Population)"
      >
        <div class="table-cell" v-for="(cell, index) in item" :key="index">
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
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
</script>

<style lang="scss" scoped>
.table {
  &-row {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }

  &-cell {
    padding: 10px;
    flex: 1;
    text-align: center;
    border: 1px solid #cecece;
  }
}
</style>