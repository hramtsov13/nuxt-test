export default defineNuxtPlugin(() => {
  return {
    provide: {
      test: (param = new Date()) => new Date(param).toLocaleDateString(),
    },
  };
});
