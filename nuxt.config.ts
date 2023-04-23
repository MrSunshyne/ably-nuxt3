// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        app: {
            apiSecret: "",
        }
    },
    plugins: [
        {
            src: "~/plugins/ably.ts",
            ssr: false,
        },
    ]
})