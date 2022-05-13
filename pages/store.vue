<template>
  <div>
    <Head>
      <Title> Store </Title>
    </Head>
    <the-page-header title="Store page">
      <template #description>
        Demo of the <code>Pinia</code> store module
      </template>
    </the-page-header>

    <h2 class="font-bold text-[1.6rem] mb-5">Counter</h2>
    <div class="py-5 px-10 border border-gray-300 rounded-xl mb-10 bg-gray-100">
      <div class="mb-4">{{ counterValue }}</div>
      <the-button class="mr-4" @click="counterStore.increaseCounter(2)">
        Increment
      </the-button>
      <the-button class="mr-4" @click="counterStore.decreaseCounter(2)">
        Decrement
      </the-button>
      <the-button class="mr-4" @click="counterStore.clearCounter()">
        Clear
      </the-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from "~/store/counter";

const counterStore = useCounterStore();

const counterValue = computed(() => counterStore.getCounterValue);
</script>