<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="700">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">Nueva venta</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary" dark>Nueva venta</v-toolbar>
                        <v-card-text>
                            <div class="text-h2 pa-12">
                                <v-card elevation="0">
                                    <form action="">
                                        <v-text-field label="Codigo de producto" v-model="venta.cod_producto" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Codigo de cliente" v-model="venta.cod_cliente" outlined>
                                        </v-text-field>
                                        <v-text-field label="Cantidad" v-model="venta.cantidad" outlined required>
                                        </v-text-field>
                                        <v-text-field label="Precio por unidad" v-model="venta.precio_unitario" outlined
                                            required> </v-text-field>
                                        <v-text-field label="Total" v-model="venta.total" outlined required>
                                        </v-text-field>
                                        <v-text-field label="Fecha" type="date" v-model="venta.fecha" outlined required>
                                        </v-text-field>
                                    </form>
                                    <v-btn @click="addVentas" color="primary">
                                        Guardar
                                    </v-btn>
<!-- <select name="" id="">
    <option v-for="cliente in clientes" :value="cliente.id">{{cliente.nombre}}</option>
</select> -->
                                </v-card>
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text color="primary" @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({

        venta: {
            cod_producto: '',
            cod_cliente: '',
            cantidad: '',
            precio_unitario: '',
            total: '',
            fecha: ''
        },
    }),
    methods: {
        async addVentas() {
            const res = await axios.post("http://127.0.0.1:5000/api/ventas", this.venta);

            this.venta.cod_producto,
                this.venta.cod_cliente,
                this.venta.cantidad,
                this.venta.precio_unitario,
                this.venta.total,
                this.venta.fecha
        },
    }
}
</script>





<style>