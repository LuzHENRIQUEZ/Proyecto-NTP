<template>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Categorias</h1>
          <form-categorias/>
          <data-table-categoria :categoriass="categoriass" @CargarCategorias="categorias"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import DataTableCategoria from './components/DataTableCategorias.vue';
import FormCategorias from './components/FormCategoria.vue';
export default {
  data:()=>({
    categoriass:[],
  }),
  components: { 
    DataTableCategoria,
    FormCategorias,
  },
methods:{
  async categorias(){
    const res = await axios.get("http://127.0.0.1:5000/api/categorias/");
    console.log(res);
    this.categoriass = res.data.body;
  },
},
mounted (){
this.categorias();

 },
};
</script>

<style>

</style>