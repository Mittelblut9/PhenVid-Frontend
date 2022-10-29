<template>
    <RouterView :isLoggedIn="isLoggedIn" :username="username" :email="email" />
</template>

<script>
export default {
    name: 'PhenixVid',
    data: () => {
        return {
            isLoggedIn: true,
            username: 'Felix von der Laden',
            email: 'example@example.com',
        };
    },
    mounted() {
        //Prevent image drag if the dataset "canbedrag" is not true
        window.ondragstart = function (e) {
            if (e.target.dataset.canbedrag != 'true') {
                return false;
            }
        };
    },
};
</script>

<style>
@import url('../src/assets/css/main.css');
</style>
