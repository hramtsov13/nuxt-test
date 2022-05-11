export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/auth') {
    return abortNavigation();
  }
  return navigateTo(to.path);
});
