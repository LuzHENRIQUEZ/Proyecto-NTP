<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Ventas</h1>
        <form-venta/>
        <data-table-ventas :ventass="ventass" @CargarVenta="ventas"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import FormVenta from './components/FormVenta.vue';
import DataTableVentas from './components/DataTableVentas.vue';
export default {
data:()=>({
  ventass:[],
}),
components: { 
DataTableVentas,
FormVenta,
},
methods:{
async ventas(){
  const res = await axios.get("http://127.0.0.1:5000/api/ventas/");
  console.log(res);
  this.ventass = res.data.body;
},
},
mounted (){
this.ventas();

},
};
</script>

<style>

</style>