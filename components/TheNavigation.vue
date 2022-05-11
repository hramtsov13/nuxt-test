<template>
  <nav class="nav">
    <h3>Nuxt App</h3>

    <ul class="nav-list">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/youtube">Youtube</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/auth">Auth</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: cadetblue;
  color: white;

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin-right: 0.5rem;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>