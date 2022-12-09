<template>
    <div>
        <v-card>
            <v-card-title>
                Lista de clientes
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="clientess" :items-per-page="5" class="elevation-3" :search="search">
                <template v-slot:item.acciones="{item}">
                    <v-btn class="mx-3" fab dark color="indigo" small @click="update(item)">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-3" fab dark color="error" @click="deleteClientes(item)" small>
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
    name: "DataTableClientes",
    props: {
        clientess: {
            type: Array,
        }
    },
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Codigo del cliente',
                align: 'start',
                sortable: false,
                value: 'cod_cliente',
                class: "headerTable"
            },
            { text: '_id', value: '_id', class: "headerTable" },
            { text: 'Nombre del cliente', value: 'nombre_cliente', class: "headerTable" },
            { text: 'Direccion', value: 'direccion', class: "headerTable" },
            { text: 'Telefono', value: 'telefono', class: "headerTable" },
            { text: 'Correo', value: 'correo', class: "headerTable" },
            { text: 'Acciones', value: 'acciones', class: "headerTable" },
            
        ],
    }),
    methods:{
        async deleteClientes(item){
            const res= await axios.delete("http://127.0.0.1:5000/api/clientes/"+ item._id);
            this.$emit("CargarClientes");
        },
        update(item){
            this.$router.push('/updateClientes/'+item._id);
        }
    },

};
</script>

<style>
.headerTable {
    background: blueviolet;
}
</style>