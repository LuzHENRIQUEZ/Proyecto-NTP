const Ventas = [
    {
      path: '/Ventas',
      name: 'ventas',
      component:() => import ('../Ventas.vue'),
    },
    {
      path: '/updateVentas/:id',
      name: 'updateVentas',
      component:() => import ('../updateVentas.vue'),
    }
   
  ];
  export default Ventas