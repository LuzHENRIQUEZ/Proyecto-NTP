<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Productos</h1>
        <form-producto/>
        <data-table-productos :productoss="productoss" @CargarProductos="producto"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import FormProducto from './components/FormProducto.vue';
import DataTableProductos from './components/DataTableProductos.vue';
export default {
data:()=>({
  productoss:[],
}),
components: { 
DataTableProductos,
FormProducto
},
methods:{
async producto(){
  const res = await axios.get("http://127.0.0.1:5000/api/productos/");
  console.log(res);
  this.productoss = res.data.body;
},

},
mounted (){
this.producto();

},
};
</script>

<style>

</style>