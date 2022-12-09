<template>
    <div>
        <v-card>
            <v-card-title>
                Lista de Proveedores
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="proveedoress" :items-per-page="5" class="elevation-3" :search="search">
                <template v-slot:item.acciones="{item}">
                    <v-btn class="mx-3" fab dark color="indigo" small @click="update(item)">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-3" fab dark color="error" @click="deleteProveedor(item)" small>
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
        proveedoress: {
            type: Array,
        }
    },
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Codigo del proveedor',
                align: 'start',
                sortable: false,
                value: 'idproveedor',
                class: "headerTable"
            },
            { text: '_id', value: '_id', class: "headerTable" },
            { text: 'Nombre de proveedor', value: 'proveedor', class: "headerTable" },
            { text: 'Direccion', value: 'direccion', class: "headerTable" },
            { text: 'Telefono', value: 'telefono', class: "headerTable" },
            { text: 'Correo', value: 'correo', class: "headerTable" },
            { text: 'Acciones', value: 'acciones', class: "headerTable" },
            
        ],
    }),
    methods:{
        async deleteProveedor(item){
            const res= await axios.delete("http://127.0.0.1:5000/api/proveedores/"+ item._id);
            this.$emit("CargarProveedores");
        },
        update(item){
            this.$router.push('/updateProveedores/'+item._id);
        }
    },

};
</script>

<style>
.headerTable {
    background: blueviolet;
}
</style>