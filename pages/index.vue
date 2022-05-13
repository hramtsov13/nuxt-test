<template>
  <Head>
    <Title> Vue&SSR Setup </Title>
  </Head>
  <div class="text-white select-none">
    <h1
      class="
        text-[6rem]
        leading-[1.1]
        text-center
        font-bold
        mb-10
        text-gradient
      "
    >
      {{ $t("INDEX_PAGE_TITLE") }}
    </h1>
    <ul class="mb-40 pl-[4rem] grid grid-cols-3 grid-rows-2 gap-[20px]">
      <li
        class="
          hover:text-green
          transition
          duration-300
          text-[2rem]
          leading-none
          justify-self-center
        "
      >
        <NuxtLink
          class="flex items-center relative"
          to="https://vuejs.org/"
          target="_blank"
        >
          <img
            src="../assets/img/vue.svg"
            alt="Vue 3 logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>Vue 3</p>
        </NuxtLink>
      </li>
      <li
        class="
          hover:text-green
          transition
          duration-300
          text-[2rem]
          leading-none
          justify-self-center
        "
      >
        <NuxtLink
          class="flex items-center relative"
          to="https://v3.nuxtjs.org/"
          target="_blank"
        >
          <img
            src="../assets/img/nuxt.svg"
            alt="Nuxt 3 logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>Nuxt 3</p>
        </NuxtLink>
      </li>
      <li
        class="
          hover:text-sky-400
          transition
          duration-300
          text-[2rem]
          leading-none
          relative
          justify-self-center
        "
      >
        <NuxtLink
          to="https://tailwindcss.com/docs/installation"
          target="_blank"
        >
          <img
            src="../assets/img/windi.svg"
            alt="Windicss logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>Windicss</p>
        </NuxtLink>
      </li>
      <li
        class="
          hover:text-green
          transition
          duration-300
          text-[2rem]
          leading-none
          justify-self-center
        "
      >
        <NuxtLink
          class="flex items-center relative"
          to="https://i18n.nuxtjs.org/"
          target="_blank"
        >
          <img
            src="../assets/img/i18n.svg"
            alt="i18n logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>i18n</p>
        </NuxtLink>
      </li>
      <li
        class="
          hover:text-green
          transition
          duration-300
          text-[2rem]
          leading-none
          justify-self-center
        "
      >
        <NuxtLink
          class="flex items-center relative"
          to="https://vueuse.org/"
          target="_blank"
        >
          <img
            src="../assets/img/vueuse.svg"
            alt="Vue use logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>Vue use</p>
        </NuxtLink>
      </li>
      <li
        class="
          hover:text-yellow
          transition
          duration-300
          text-[2rem]
          leading-none
          justify-self-center
        "
      >
        <NuxtLink
          class="flex items-center relative"
          to="https://pinia.vuejs.org/"
          target="_blank"
        >
          <img
            src="../assets/img/pinia.svg"
            alt="Pinia logo"
            class="w-10 h-10 absolute -left-16"
          />
          <p>Pinia</p>
        </NuxtLink>
      </li>
    </ul>
    <div class="flex justify-center items-center">
      <NuxtLink
        to="/home"
        class="
          py-4
          px-12
          bg-blue
          rounded-lg
          text-[1.5rem]
          font-medium
          hover:text-gradient hover:bg-green
          transition
          duration-300
        "
      >
        {{ $t("INDEX_PAGE_START_BUTTON") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>