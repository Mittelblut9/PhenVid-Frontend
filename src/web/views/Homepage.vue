<template>
    <h1>LOGIN</h1>
    <div id="g_id_signin"></div>
</template>

<script>
import { CreateScriptHtml } from '../../functions/createScriptsHtml/createScriptHtml';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Homepage',
    mounted() {
        new CreateScriptHtml({
            path: 'https://accounts.google.com/gsi/client',
            document,
            async: true,
            defer: true
        })
        function handleCredentialResponse(res) {
            const credential = res.credential;


            const xhr = new XMLHttpRequest()
            xhr.open("GET", "http://localhost:8080/getUser/" + credential)
            xhr.send()
        }

        window.onload = function () {
            // eslint-disable-next-line no-undef
            google.accounts.id.initialize({
                client_id: '141890256978-303jipsip2jip00jonfn5lpnad8m0o08.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });

            // eslint-disable-next-line no-undef
            google.accounts.id.renderButton(
                document.getElementById('g_id_signin'), {
                theme: "outline",
                size: "medium"
            }
            )
        };
    },
}
</script>

<style>
</style>
