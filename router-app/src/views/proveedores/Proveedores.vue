<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Proveedores</h1>
        <form-prov/>
        <data-table-proveedores :proveedoress="proveedoress" @CargarProveedores="proveedores"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import FormProv from './components/FormProv.vue';
import DataTableProveedores from './components/DataTableProveedores.vue';
export default {
data:()=>({
  proveedoress:[],
}),
components: { 
  DataTableProveedores,
  FormProv,
},
methods:{
async proveedores(){
  const res = await axios.get("http://127.0.0.1:5000/api/proveedores/");
  console.log(res);
  this.proveedoress = res.data.body;
},
},
mounted (){
this.proveedores();

},
};
</script>

<style>

</style>