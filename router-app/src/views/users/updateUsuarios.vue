<template>
    <v-container>
        <v-row class="editar">
            <v-col cols="12" md="5">
                <v-card elevation="3">
                    <form action="" class="">
                        <v-toolbar color="primary" dark>Editar usuario</v-toolbar>
                        <v-text-field label="Numero de usuario" v-model="Name" outlined required
                            style="margin-top:20px">
                        </v-text-field>
                        <v-text-field label="Correo" v-model="correo" outlined>
                        </v-text-field>
                        <v-text-field label="Estado" v-model="estado" outlined required> </v-text-field>
                    </form>
                    <v-btn @click="addUsers" color="primary">
                        Guardar
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        id: null,
        Name: '',
        correo: '',
        estado: ''


    }),
    methods: {
        async ObtenerUsers(id) {
            const res = await axios.get("http://127.0.0.1:5000/api/usuarios/" + id);
            const { body } = res.data
            this.Name = body.Name
            this.correo = body.email
            this.estado = body.estado
            console.log(res);
        },

        async addUsers() {
            let params = {
                Name: this.Name,
                email: this.correo,
                estado: this.estado
            }
            await axios.put("http://127.0.0.1:5000/api/usuarios/" + this.id, params)
                .then(resultado => {
                    console.log(resultado);
                    this.$router.push("/Usuarios")
                });
        }
    },

    mounted() {
        console.log(this.$route.params);
        this.id = this.$route.params.id;
        this.ObtenerUsers(this.$route.params.id)
        console.log(this.id);
    },
}
</script>

<style>
.editar {
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
}

.v-toolbar {
    text-align: center;
}
</style>