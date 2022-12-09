<template>
    <v-row justify="space-around">
        <v-col cols="auto">

            <v-card elevation="0">
                <form action="">
                    <v-text-field label="Numero de proveedor" v-model="proveedor.idproveedor" outlined required>
                    </v-text-field>
                    <v-text-field label="Proveedor" v-model="proveedor.proveedor" outlined>
                    </v-text-field>
                    <v-text-field label="Direccion" v-model="proveedor.direccion" outlined required> </v-text-field>
                    <v-text-field label="Telefono" v-model="proveedor.telefono" outlined required> </v-text-field>
                    <v-text-field label="Correo" v-model="proveedor.correo" outlined required> </v-text-field>
                </form>
                <v-btn @click="addProvee">
                    Guardar
                </v-btn>

            </v-card>
        </v-col>
    </v-row>
</template>

</template>
<script>
import axios from 'axios';
export default {
    data: () => ({

        proveedor: {
            idproveedor: '',
            proveedor: '',
            direccion: '',
            telefono: '',
            correo: ''
        },
    }),
    methods: {
        async addProvee() {
            const res = await axios.post("http://127.0.0.1:5000/api/proveedores/", this.proveedor);
            this.$router.push('/Productos')
            this.proveedor.idproveedor,
                this.proveedor.proveedor,
                this.proveedor.direccion,
                this.proveedor.telefono,
                this.proveedor.correo
        },
    }
}
</script>





<style>