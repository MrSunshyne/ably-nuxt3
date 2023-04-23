<template>
    <div>
        <h1>Lobby</h1>
        <p>lobby id {{ id }} </p>

        <!-- Chat History -->
        <div>
            <p>Chat History</p>
        </div>
        <div>
            <ul>
                <li v-for="message in chatHistory" :key="message.id">
                    {{ message.data }}
                </li>
            </ul>
        </div>

        <!-- Chatbox -->
        <input type="text" v-model="message">
        <button @click="sendMessage">Send</button>


    </div>
</template>

<script setup lang="ts">
import { getChannelNameFromId } from '~/utils/channel';
import type Types from 'ably';
const { $io } = useNuxtApp()

// get lobby from id
const route = useRoute();
const id = route.params.id;

// Channel
const channelName = getChannelNameFromId(id);
const channel = $io.channels.get(channelName);

channel.subscribe((message) => {
    console.log('Received: ' + message.data);
    chatHistory.value.push(message);
})

// Chat
const chatHistory: Ref<Types.Types.Message[]> = ref([]);
const message = ref('');

function sendMessage() {
    channel.publish('message', message.value);
    message.value = '';
}

</script>