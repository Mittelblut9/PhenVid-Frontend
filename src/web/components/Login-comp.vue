<template>
    <div class="login">
        <div class="login__container">
            <div class="login__container__header">
                <h1 class="login__container__header__title">Login</h1>
                <p class="login__container__header__subtitle">Login to your account</p>
            </div>
            <div class="login__container__form">
                <form action="" method="post">
                    <div class="login__container__form__input">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email" />
                    </div>
                    <div class="login__container__form__input">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password" />
                    </div>
                    <div class="login__container__form__input">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
            <div class="login__container__footer">
                <p class="login__container__footer__text">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Homepage',
};
</script>

<style></style>
