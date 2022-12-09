<template>
  <v-container>
    <v-row class="editar">
            <v-col cols="12" md="5">
              <v-card elevation="3">
                <form action="">
                  <v-toolbar color="primary" dark style="text-aling: center">Editar Cliente</v-toolbar>
                    <v-text-field label="Codigo de cliente" v-model="cod_cliente"  outlined required style="margin-top: 20px">
                    </v-text-field>
                    <v-text-field label="Nombre" v-model="nombre_cliente" outlined>
                    </v-text-field>
                    <v-text-field label="Direccion" v-model="direccion" outlined required> </v-text-field>
                    <v-text-field label="Telefono" v-model="telefono" outlined required> </v-text-field>
                    <v-text-field label="Correo" v-model="correo" outlined required> </v-text-field>
                </form>
                <v-btn class="primary" @click="addClient">
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
            cod_cliente: '',
            nombre_cliente: '',
            direccion: '',
            telefono:'',
            correo:''
            
      
    }),
    methods: {
        async ObtenerCliente(id) {
            const res = await axios.get("http://127.0.0.1:5000/api/clientes/" + id);
            const {body}= res.data
            this.cod_cliente= body.cod_cliente
            this.nombre_cliente=body.nombre_cliente
            this.direccion =body.direccion
            this.telefono=body.telefono
            this.correo=body.correo
           console.log(res);
        },

        async addClient(){
          let params = {
            cod_cliente:this.cod_cliente,
            nombre_cliente:this.nombre_cliente,
            direccion:this.direccion,
            telefono:this.telefono,
            correo:this.correo,
          }
         await axios.put("http://127.0.0.1:5000/api/clientes/" + this.id, params)
         .then(resultado=>{
          console.log(resultado);
          this.$router.push("/Clientes")
         });
        }
    },

    mounted(){
        console.log(this.$route.params);
        this.id = this.$route.params.id;
       this.ObtenerCliente(this.$route.params.id)
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