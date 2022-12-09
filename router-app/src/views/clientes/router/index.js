const Clientes = [
  {
    path: '/Clientes',
    name: 'clientes',
    component:() => import ('../Clientes.vue'),
  },
  {
    path: '/updateClientes/:id',
    name: 'updateClientes',
    component:() => import ('../updateClientes.vue'),
  },
  //userRoutes,
];
export default Clientes