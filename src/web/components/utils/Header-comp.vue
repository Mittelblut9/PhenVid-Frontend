<template>
    <section>
        <header id="pgv_header">
            <div class="pg_logo left">
                <img src="https://blackdayz.de/img/pg_logo" alt="PhenixVid Logo" />
            </div>
            <div class="profile right white">
                <div class="profile_picture right">
                    <img
                        src="https://cdn.boldomatic.com/content/profile-image?v=2&platform=web&device=browser&key=profile-images/55513-56e908a4702045fb09f35714f49dc440113d89ddf2aa48f679f6c79fd894a1dd.jpg&width=40&height=40&format=jpg&quality=50"
                        :alt="`${username}s profile picture`" />
                </div>
                <div class="profile_loggedin" v-if="isLoggedIn">
                    <p class="name left">
                        <span class="profile_emoji">👋</span>
                        {{ username }}
                    </p>
                    <p class="email left">
                        <span>({{ email }})</span>
                    </p>
                </div>
                <div class="profile_loggedout right" v-else>
                    <span>Hello. <a href="#" class="white">Login</a>!</span>
                </div>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: 'PhenixVidHeader',
    data: () => {
        return {};
    },
    beforeCreate() {
        //? Import specefic css files whether the user is logged-in or logged-out
        const styleTag = document.createElement('link');
        if (this.isLoggedIn) {
            styleTag.href = 'src/assets/css/header/header_loggedin.css';
        } else {
            styleTag.href = 'src/assets/css/header/header_loggedout.css';
        }
        styleTag.rel = 'stylesheet';
        styleTag.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(styleTag);
    },
    methods() {},
    props: ['username', 'email', 'isLoggedIn'],
};
</script>

<style scoped>
@import url('../../../assets/css/header/header.css');
</style>
