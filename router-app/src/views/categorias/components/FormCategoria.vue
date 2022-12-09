<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Nueva categoria
                    </v-btn>
                </template>
                <v-card >
                    <v-toolbar color="primary" dark>Nueva categoria</v-toolbar>
                    <v-card-text class="text-h2 pa-12"> 
                        <form action="">
                            <v-text-field label="Nombre de categoria" v-model="categoria.categoria" outlined
                                required> </v-text-field>
                        </form>
                        <v-btn @click="addCategoria" color="primary">
                            Guardar
                        </v-btn>

                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" text @click="dialog = false">
                            Cerrar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        dialog: false,
        categoria: {
            categoria: ''
        },
    }),
    methods: {
        async addCategoria() {
            const res = await axios.post("http://127.0.0.1:5000/api/categorias", this.categoria);
                this.categoria.categoria

                this.dialog= false
        },
    }
}
</script>



<style>