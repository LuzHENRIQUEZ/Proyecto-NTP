import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userRoutes from '../views/users/router/index.js'
import Product from '../views/productos/router/index.js'
import Proveedores from '../views/proveedores/router/index.js'
import Clientes from '../views/clientes/router/index.js'
import Ventas from '../views/ventas/router/index.js'
import Categoria from '../views/categorias/router/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  ...userRoutes,
  ...Product,
  ...Proveedores,
  ...Clientes,
  ...Ventas,
  ...Categoria,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
