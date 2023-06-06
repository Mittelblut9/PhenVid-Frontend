<template>
    <div class="register">
        <div class="register__container">
            <div class="register__container__header">
                <h1 class="register__container__header__title">Register</h1>
                <p class="register__container__header__subtitle">Register to your account</p>
            </div>
            <div class="register__containter__body__form">
                <form action="" method="post" @submit.prevent="registerUser()">
                    <div class="register__containter__body__form__input">
                        <label for="username">Username</label>
                        <input
                            type="username"
                            placeholder="Enter your username"
                            v-model="username" />
                    </div>
                    <div class="register__containter__body__form__input">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter your email" v-model.trim="email" />
                    </div>
                    <div class="register__containter__body__form__input">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            v-model.trim="password" />
                    </div>
                    <div class="register__containter__body__form__input">
                        <label for="password2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            v-model.trim="passwordRepeated" />
                    </div>
                    <div class="register__containter__body__form__input">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Validation from '../../class/Validation/Validation';
import SignIn from '../../class/user/SignIn/SignIn';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Homepage',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordRepeated: '',
        };
    },

    methods: {
        registerUser() {
            if (!this.isPasswordEqual()) {
                return alert('Passwords are not equal');
            }

            this.username = Validation.validateUsername(this.username);
            this.email = Validation.validateEmail(this.email);
            this.password = Validation.validatePassword(this.password);

            switch (true) {
                case !this.username:
                    return alert('Username is not valid');
                case !this.email:
                    return alert('Email is not valid');
                case !this.password:
                    return alert('Password is not valid');
            }

            const user = {
                username: this.username,
                email: this.email,
                password: this.password,
            };

            const newRequest = new SignIn(user);

            //TODO
        },
        isPasswordEqual() {
            return this.password === this.passwordRepeated;
        },
    },
};
</script>

<style></style>
