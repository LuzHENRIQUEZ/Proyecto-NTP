<template>
    <div>
        <v-card>
            <v-card-title>
                Lista de Productos
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="productoss" :items-per-page="5" class="elevation-5" :search="search">
                <template v-slot:item.acciones="{item}">
                    <v-btn class="mx-3" fab dark color="indigo" small @click="update(item)">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-3" fab dark color="error" @click="deleteProducto(item)" small>
                        <v-icon dark>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "DataTableProductos",
    props: {
        productoss: {
            type: Array,
        }
    },
    data: () => ({
        search: '',
        headers: [
        { text: '_id', value: '_id', class: "headerTable" },
            {
                text: 'Codigo de producto',
                align: 'start',
                sortable: false,
                value: 'codigoProducto',
                class: "headerTable"
            },
            { text: 'Nombre de producto', value: 'producto', class: "headerTable" },
            { text: 'Proveedor', value: 'proveedor', class: "headerTable" },
            { text: 'Descripcion', value: 'descripcion', class: "headerTable" },
            { text: 'Precio de venta', value: 'precio_venta', class: "headerTable" },
            { text: 'Fecha de ingreso', value: 'fecha_ingreso', class: "headerTable" },
            { text: 'Cantidad en existencia', value: 'stock', class: "headerTable" },
            { text: 'Categoria', value: 'categoria', class: "headerTable" },
            { text: 'Acciones', value: 'acciones', class: "headerTable" },
            
        ],
    }),
    methods:{
        async deleteProducto(item){
            const res= await axios.delete("http://127.0.0.1:5000/api/productos/"+ item._id);
            this.$emit("CargarProductos");
        },
        update(item){
            this.$router.push('/updateProducto/'+item._id);
        }
    },

};
</script>

<style>
.headerTable {
    background: blueviolet;
}
</style>