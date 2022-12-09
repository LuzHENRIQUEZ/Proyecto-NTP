<template>
    <div>
        <v-card>
            <v-card-title>
                Lista de categorías
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="categoriass" :items-per-page="5" class="elevation-5" :search="search">
                <template v-slot:item.acciones="{item}">
                    <v-btn class="mx-2" fab dark color="indigo" small @click="update(item)">
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark color="error" @click="deleteCategoria(item)" small>
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
    name: "DataTableCategorias",
    props: {
        categoriass: {
            type: Array,
        }
    },
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Codigo de categoría',
                align: 'start',
                sortable: false,
                value: '_id',
                class: "headerTable"
            },
            { text: 'Categoría', value: 'categoria', class: "headerTable" },
            { text: 'Acciones', value: 'acciones', class: "headerTable" }
        ],
    }),
    methods:{
        async deleteCategoria(item){
            const res= await axios.delete("http://127.0.0.1:5000/api/categorias/"+ item._id);
            this.$emit("CargarCategorias");
        },
        update(item){
            this.$router.push('/updateCategoria/'+item._id);
        }
    },

};
</script>

<style>
.headerTable {
    background: blueviolet;
}
</style>