<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Clientes</h1>
        <form-cliente/>
        <data-table-clientes :clientess="clientess" @CargarClientes="clientes"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import DataTableClientes from './components/DataTableClientes.vue';
import FormCliente from './components/FormCliente.vue';
export default {
data:()=>({
  clientess:[],
}),
components: { 
DataTableClientes,
FormCliente,
},
methods:{
async clientes(){
  const res = await axios.get("http://127.0.0.1:5000/api/clientes");
  console.log(res);
  this.clientess = res.data.body;
},
},
mounted (){
this.clientes();

},
};
</script>

<style>

</style>