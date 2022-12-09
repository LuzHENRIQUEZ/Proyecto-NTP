<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Nuevo cliente
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar color="primary" dark>Nuevo cliente</v-toolbar>
                    <v-card-text class="text-h2 pa-12">
                        <form action="">
                                        <v-text-field label="Codigo de cliente" v-model="cliente.cod_cliente"
                                            outlined required> </v-text-field>
                                        <v-text-field label="Nombre del cliente" v-model="cliente.nombre_cliente" outlined>
                                        </v-text-field>
                                        <v-text-field label="Direccion" v-model="cliente.direccion" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Telefono" v-model="cliente.telefono" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Correo" v-model="cliente.correo" outlined
                                            required> </v-text-field>
                                    </form>
                                    <v-btn @click="addCliente" color="primary">
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
        cliente: {
            cod_cliente: '',
            nombre_cliente: '',
            direccion: '',
            telefono: '',
            correo: ''
        },
    }),
    methods: {
        async addCliente() {
            const res = await axios.post("http://127.0.0.1:5000/api/clientes", this.cliente);
          
            this.cliente.cod_cliente,
                this.cliente.nombre_cliente,
                this.cliente.direccion,
                this.cliente.telefono,
                this.cliente.correo

                this.dialog=false
        },
    }
}
</script>



<style>