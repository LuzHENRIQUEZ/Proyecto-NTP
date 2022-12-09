<template>
  <v-container>
        <v-row class="editar">
            <v-col cols="12" md="5">
                <v-card elevation="3">
                  <form action="" class="form">
                  <v-toolbar color="primary" dark style="text-aling: center">Editar Venta</v-toolbar>
                    <v-text-field label="Codigo de cliente" v-model="cod_cliente" outlined required style="margin-top:20px">
                    </v-text-field>
                    <v-text-field label="codigo de producto " v-model="cod_producto" outlined>
                    </v-text-field>
                    <v-text-field label="Cantidad" v-model="cantidad" outlined required> </v-text-field>
                    <v-text-field label="Precio por unidad " v-model="precio_unitario" outlined required> </v-text-field>
                    <v-text-field label="Total" v-model="total" outlined required> </v-text-field>
                    <v-text-field label="fecha"  type ="date" v-model="fecha" outlined required> </v-text-field>
                </form>
                <v-btn class="primary" @click="addVenta">
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
            cod_producto: '',
            cantidad: '',
            precio_unitario:'',
            total:'',
            fecha:''
            
      
    }),
    methods: {
        async ObtenerVenta(id) {
            const res = await axios.get("http://127.0.0.1:5000/api/ventas/" + id);
            const {body}= res.data
            this.cod_cliente= body.cod_cliente
            this.cod_producto=body.cod_producto
            this.cantidad =body.cantidad
            this.precio_unitario=body.precio_unitario
            this.total=body.total
            this.fecha=body.fecha
           console.log(res);
        },

        async addVenta(){
          let params = {
            cod_cliente: this.cod_cliente,
            cod_producto:this.cod_producto,
            cantidad :this.cantidad,
            precio_unitario:this.precio_unitario,
            total:this.total,
            fecha:this.fecha
          }
         await axios.put("http://127.0.0.1:5000/api/ventas/" + this.id, params)
         .then(resultado=>{
          console.log(resultado);
          this.$router.push("/Ventas")
         });
        }
    },

    mounted(){
        console.log(this.$route.params);
        this.id = this.$route.params.id;
       this.ObtenerVenta(this.$route.params.id)
        console.log(this.id);
    },
}
</script>

<style>
.editar {
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
}
.v-toolbar{
  text-align: center;
}
</style>