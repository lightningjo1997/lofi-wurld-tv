export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', // https://github.com/nuxt/devtools
  '@nuxt/devtools', 
  "@nuxtjs/supabase",
  'nuxt-icon'],
  supabase: {
    // Options
    redirect:false,
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  }
  ,
  runtimeConfig: {
    public: {
      FORMSPREE_URL: 'https://formspree.io/f/xoqgkrpg',
    }
  }
})