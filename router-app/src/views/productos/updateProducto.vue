<template>
  <v-container>
    <v-row class="editar">
            <v-col cols="12" md="5">
              <v-card elevation="3">
            <form action="">
              <v-toolbar color="primary" dark style="text-aling: center">Editar Producto</v-toolbar>
              <v-text-field label="Codigo de producto" v-model="cod_Producto" outlined required style="margin-top: 20px">
              </v-text-field>
              <v-text-field label="Producto" v-model="producto" outlined>
              </v-text-field>
              <v-text-field label="Proveedor" v-model="proveedor" outlined required> </v-text-field>
              <v-text-field label="Descripcion" v-model="descripcion" outlined required> </v-text-field>
              <v-text-field label="Precio de venta" v-model="precio_venta" outlined required> </v-text-field>
              <v-text-field label="Fecha de ingreso" type="date" v-model="fecha_ingreso" outlined required>
              </v-text-field>
              <v-text-field label="Cantidad de productos" v-model="stock" outlined required> </v-text-field>
              <v-text-field label="Categoria" v-model="categoria" outlined required> </v-text-field>
            </form>
            <v-btn class="primary" @click="addProduct">
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
  data: () => ({
    id: null,
    cod_Producto: '',
    producto: '',
    proveedor: '',
    descripcion: '',
    precio_venta: '',
    fecha_ingreso: '',
    stock: '',
    categoria: '',



  }),
  methods: {
    async ObtenerProducto(id) {
      const res = await axios.get("http://127.0.0.1:5000/api/productos/" + id);
      const { body } = res.data
      this.cod_Producto = body.cod_producto
      this.producto = body.producto
      this.proveedor = body.proveedor
      this.descripcion = body.descripcion
      this.precio_venta = body.precio_venta
      this.fecha_ingreso = body.fecha_ingreso
      this.stock = body.stock
      this.categoria = body.categoria
      console.log(res);
    },

    async addProduct() {
      let params = {
        cod_Producto: this.cod_Producto,
        producto: this.producto,
        proveedor: this.proveedor,
        descripcion: this.descripcion,
        precio_venta: this.precio_venta,
        precio_ingreso: this.fecha_ingreso,
        stock: this.stock,
        categoria: this.categoria,
      }
      await axios.put("http://127.0.0.1:5000/api/productos/" + this.id, params)
        .then(resultado => {
          console.log(resultado);
          this.$router.push("/Productos")
        });
    }
  },

  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.ObtenerProducto(this.$route.params.id)
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
text-align: center;}
</style>