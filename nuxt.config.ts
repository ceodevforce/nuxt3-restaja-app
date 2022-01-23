import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss'
    ],
    publicRuntimeConfig: {
        supabaseURL: process.env.SUPABASE_URL,
        supabaseKEY: process.env.SUPABASE_KEY
    }

})
