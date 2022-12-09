<template>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Usuarios</h1>
          <data-table-users :userss="userss" @CargarUsuarios="users"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import DataTableUsers from './components/DataTableUsers.vue';
export default {
  data:()=>({
    userss:[],
  }),
  components: { 
    DataTableUsers,
  },
methods:{
  async users(){
    const res = await axios.get("http://127.0.0.1:5000/api/usuarios/");
    console.log(res);
    this.userss = res.data.body;
  },
},
mounted (){
this.users();

 },
};
</script>

<style>

</style>