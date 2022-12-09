<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Nuevo proveedor
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar color="primary" dark>Nuevo proveedor</v-toolbar>
                    <v-card-text class="text-h2 pa-12">
                        <form action="">
                                        <v-text-field label="Numero de proveedor" v-model="proveedor.cod_proveedor"
                                            outlined required> </v-text-field>
                                        <v-text-field label="Proveedor" v-model="proveedor.nombre_proveedor"  value="" outlined>
                                        </v-text-field>
                                        <v-text-field label="Direccion" v-model="proveedor.direccion" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Telefono" v-model="proveedor.telefono" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Correo" v-model="proveedor.correo" outlined
                                            required> </v-text-field>
                                    </form>
                                    <v-btn @click="addProvee" color="primary">
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
        dialog:false,
        proveedor: {
            cod_proveedor: '',
            nombre_proveedor: '',
            direccion: '',
            telefono: '',
            correo: ''
        },
    }),
    methods: {
        async addProvee() {
            const res = await axios.post("http://127.0.0.1:5000/api/proveedores/", this.proveedor);
            this.proveedor.cod_proveedor,
                this.proveedor.nombre_proveedor,
                this.proveedor.direccion,
                this.proveedor.telefono,
                this.proveedor.correo

                this.dialog= false
        },
    }
}
</script>



<style>