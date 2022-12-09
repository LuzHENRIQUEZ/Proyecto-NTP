<template>
    <div>
        <v-card>
            <v-card-title>
                Lista de ventas
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="ventass" :items-per-page="5" class="elevation-5" :search="search">
                <template v-slot:item.acciones="{item}">
                    <v-btn class="mx-2" fab dark color="indigo" small @click="updateVenta(item)">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark color="error" @click="deleteVenta(item)" small>
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
    name: "DataTableVentas",
    props: {
        ventass: {
            type: Array,
        }
    },
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Codigo del producto',
                align: 'start',
                sortable: false,
                value: 'cod_producto',
                class: "headerTable"
            },
            { text: 'Codigo de cliente', value: 'clientes[0].nombre_cliente', class: "headerTable" },
            { text: 'Cantidad', value: 'cantidad', class: "headerTable" },
            { text: 'Precio por unidad', value: 'precio_unitario', class: "headerTable" },
            { text: 'Total', value: 'total', class: "headerTable" },
            { text: 'Fecha', value: 'fecha', class: "headerTable" },
            { text: 'Acciones', value: 'acciones', class: "headerTable" },
        ],
    }),
    methods:{
        async deleteVenta(item){
            const res= await axios.delete("http://127.0.0.1:5000/api/ventas/"+ item._id);
            this.$emit("CargarVenta");
        },
        updateVenta(item){
            this.$router.push('/updateVentas/'+item._id);
        }
    },

};
</script>

<style>
.headerTable {
    background: blueviolet;
}
</style>