<template>
    <v-container>
        <v-row class="editar">
            <v-col cols="12" md="5">
              <v-card elevation="3">
                  <form action="">
                    <v-toolbar color="primary" dark style="text-aling: center">Editar Categoría</v-toolbar>
                    <v-text-field label="Codigo" v-model="id" outlined style="margin-top: 20px" disabled></v-text-field>
                      <v-text-field label="Categoría" v-model="categoria" outlined >
                      </v-text-field>
                  </form>
                  <v-btn @click="addCate" color="success">
                      Guardar
                  </v-btn>
  
              </v-card>
          </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
export default {
    data:()=>({
        id:null,
            id: '',
            categoria: ''
            
      
    }),
    methods: {
        async ObtenerCategoria(id) {
            const res = await axios.get("http://127.0.0.1:5000/api/categorias/" + id);
            const {body}= res.data
            this.id= body._id
            this.categoria=body.categoria
           console.log(res);
        },

        async addCate(){
          let params = {
            categoria:this.categoria
          }
         await axios.put("http://127.0.0.1:5000/api/categorias/" + this.id, params)
         .then(resultado=>{
          console.log(resultado);
          this.$router.push("/Categoria")
         });
        }
    },

    mounted(){
        console.log(this.$route.params);
        this.id = this.$route.params.id;
       this.ObtenerCategoria(this.$route.params.id)
        console.log(this.id);
    },
  }
  </script>
  
  <style>
  .editar {
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
.v-toolbar{
text-align: center;
}
  </style>