<template>
    <v-container>
        <v-row class="login-box">
            <v-col cols="12" md="5">
                <v-card elevation="3">
                    <v-form @submit.prevent="" class="pa-3">
                        <h1>Iniciar Sesion</h1>
                        <v-text-field v-model="user.email" :counter="20" label="E-mail" required></v-text-field>
                        <v-text-field v-model="user.password" :counter="10" type="password" label="Password" required>
                        </v-text-field>
                        <v-btn @click="login" color="primary" class="mr-4" type="submit">
                            Iniciar Sesion
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        user: {
            email:"",
            password:""
        },
    }),
    methods: {
        async login() {
            const user = this.user;
            const usuario = await axios.get("http://127.0.0.1:5000/api/usuarios/", {
                params:{user},
            });
            console.log(usuario);
        },
    }
}
</script>
<style>
.login-box {
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
}
</style>