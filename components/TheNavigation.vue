<template>
  <nav
    class="
      absolute
      top-0
      left-0
      right-0
      h-[60px]
      px-[2rem]
      flex
      items-center
      justify-between
      text-white
      bg-gray-700
    "
  >
    <h2 class="text-[1.5rem]">
      <NuxtLink to="/">Nuxt App</NuxtLink>
    </h2>

    <ul class="nav-list list-none m-0 p-0 flex">
      <li class="mr-3">
        <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
      </li>
      <li class="mr-3">
        <NuxtLink class="hover:underline" to="/fetch">Fetch</NuxtLink>
      </li>
      <li class="mr-3">
        <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
      </li>
      <li class="mr-3">
        <NuxtLink class="hover:underline" to="/404">404</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:underline" to="/auth">Auth</NuxtLink>
      </li>
    </ul>
  </nav>
</template>