<template>
    <PGVHeader :username="username" :email="email" :isLoggedIn="isLoggedIn"/>
</template>

<script>
import PGVHeader from '../components/utils/Header-comp.vue'
export default {
    name: "PhenixVidHomepage",
    components: {
        PGVHeader
    },
    probs: {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isLoggedIn: {
            type: Boolean,
            required: true,
            default: true
        }
    },
}
</script>

<style>
</style>
