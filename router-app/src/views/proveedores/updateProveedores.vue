<template>
  <v-container>
    <v-row class="editar">
            <v-col cols="12" md="5">
              <v-card elevation="3">
                <form action="">
                  <v-toolbar color="primary" dark style="text-aling: center">Editar Proveedor</v-toolbar>
                  <v-text-field label="Codigo del proveedor" v-model="idproveedor" outlined required style="margin-top:20px"/>
                    <v-text-field label="Proveedor" v-model="proveedor" outlined required/>
                    <v-text-field label="Direccion" v-model="direccion" outlined/>
                      <v-text-field label="Telefono" v-model="telefono" outlined/>
                        <v-text-field label="Correo" v-model="correo" outlined/>
            </form>
            <v-btn @click="addProveedor"  color="primary">
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
    idproveedor: '',
    proveedor: '',
    direccion: '',
    telefono: '',
    correo: '',



  }),
  methods: {
    async ObtenerProveedor(id) {
      const res = await axios.get("http://127.0.0.1:5000/api/proveedores/" + id);
      const { body } = res.data
      this.idproveedor = body.idproveedor
      this.proveedor = body.proveedor
      this.direccion = body.direccion
      this.telefono = body.telefono
      this.correo = body.correo
      console.log(res);
    },

    async addProveedor() {
      let params = {
        idproveedor: this.idproveedor,
        proveedor: this.proveedor,
        direccion: this.direccion,
        telefono:this.telefono,
        correo:this.correo
      }
      await axios.put("http://127.0.0.1:5000/api/proveedores/" + this.id, params)
        .then(resultado => {
          console.log(resultado);
          this.$router.push("/Proveedores")
        });
    }
  },

  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.ObtenerProveedor(this.$route.params.id)
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