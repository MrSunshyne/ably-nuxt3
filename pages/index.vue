<template>
    <div>
        Welcome {{  message  }}

        <!-- Join Lobby -->
        
        <FormCreateLobby />

        <AllChannels />
        
    </div>
</template>

<script setup lang="ts">
const message = ref('Hello World!')
const { $io } = useNuxtApp()

$io.connection.on('connected', () => {
  console.log('Connected to Ably!');
});

$io.connection.on('disconnected', () => {
  console.log('Disconnected from Ably!');
});

</script>