const Categoria = [
    {
      path: '/Categoria',
      name: 'categoria',
      component:() => import ('../categoria.vue'),
    },
    {
        path: '/updateCategoria/:id',
        name: 'updateCategoria',
        component:() => import ('../updateCategoria.vue'),
      },
    //userRoutes,
  ];
  export default Categoria