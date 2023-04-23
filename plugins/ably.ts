import Ably from 'ably';

export default defineNuxtPlugin(() => {

  const runtimeConfig = useRuntimeConfig()

  let ably = new Ably.Realtime({
    key: runtimeConfig.app.apiSecret,
    clientId: 'ably-nuxt3', //optional
  })

  return {
    provide: {
      io: ably
    }
  }
})