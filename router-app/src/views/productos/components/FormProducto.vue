<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Nuevo producto
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar color="primary" dark>Nuevo producto</v-toolbar>
                    <v-card-text class="text-h2 pa-12">
                        <form action="">
                            <v-text-field label="Codigo del producto" v-model="producto.codigo_producto" outlined
                                required> </v-text-field>
                            <v-text-field label="Producto" v-model="producto.producto" outlined>
                            </v-text-field>
                            <v-text-field label="Codigo del proveedor" v-model="producto.proveedor" outlined required>
                            </v-text-field>
                            <v-text-field label="Descripcion" v-model="producto.descripcion" outlined required>
                            </v-text-field>
                            <v-text-field label="Precio de venta" v-model="producto.precio_venta" outlined required>
                            </v-text-field>
                            <v-text-field label="Fecha de ingreso" type="date" v-model="producto.fecha_ingreso" outlined
                                required> </v-text-field>
                            <v-text-field label="Cantidad de productos" v-model="producto.stock" outlined required>
                            </v-text-field>
                            <v-text-field label="Codigo de categoria" v-model="producto.categoria" outlined required>
                            </v-text-field>
                        </form>
                        <v-btn @click="addProduc" color="primary">
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
        producto: {
            codigo_producto: '',
            producto: '',
            proveedor: '',
            descripcion: '',
            precio_venta: '',
            fecha_ingreso: '',
            stock: '',
            categoria: ''
        },
    }),
    methods: {
        async addProduc() {
            const res = await axios.post("http://127.0.0.1:5000/api/productos/", this.producto);
            this.producto.codigo_producto
            this.producto.producto
            this.producto.proveedor
            this.producto.descripcion
            this.producto.precio_venta
            this.producto.fecha_ingreso
            this.producto.stock
            this.producto.categoria

            this.dialog = false
        },
    }
}
</script>





<style>