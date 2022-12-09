<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-btn target="_blank" text>
            <span class="mr-2" >Super Tech</span>
          </v-btn>
          </router-link>
      </div>
      <router-link to="/">
        <v-btn target="_blank" text>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Usuarios">
        <v-btn target="_blank" text>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Categoria">
        <v-btn target="_blank" text>
          <v-icon>mdi-shape</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Productos">
        <v-btn target="_blank" text>
          <v-icon>mdi-store </v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Proveedores">
        <v-btn target="_blank" text>
          <v-icon>mdi-account-group </v-icon>
        </v-btn>
      </router-link>
        <router-link to="/Clientes">
        <v-btn target="_blank" text>
          <v-icon>mdi-account-tie</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/Ventas">
        <v-btn target="_blank" text>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn target="_blank" text>
          <span class="mr-2">Login</span>
        </v-btn>
      </router-link>
        <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>