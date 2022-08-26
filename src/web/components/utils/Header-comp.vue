<template>
    <header id="pgv_header">
        <div class="pg_logo left">
            <img src="https://blackdayz.de/img/pg_logo" alt="PhenixVid Logo" />
        </div>
        <div class="profile right">
            <div class="profile_loggedin" v-if="isLoggedIn">
                <p class="name">Hello {{username}} </p>
                <p class="email">({{email}})</p>
            </div>
            <div class="profile_loggedout" v-else>
                <span>Hello. Login!</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "PhenixVidHeader",
    data: () => {
        return {
            
        }
    },
    beforeCreate() {
        
    },
    methods() {

    },
    props: [
        "username",
        "email",
        "isLoggedIn"
    ]
}
</script>

<style scoped>
@import url('../../../assets/css/header/header.css');
</style>