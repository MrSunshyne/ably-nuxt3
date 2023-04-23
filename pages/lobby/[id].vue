<template>
    <div>
        <h1>Lobby</h1>
        <p>lobby id {{ id }} </p>
    </div>
</template>

<script setup lang="ts">
// get route param id

// get lobby from id
const route = useRoute();
const id = route.params.id;

</script>