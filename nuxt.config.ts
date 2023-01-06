// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "nuxt-icon"],

  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },
  tailwindcss: {
    cssPath: "@/assets/css/tailwind.css",
    configPath: "@/config/tailwind.ts",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
