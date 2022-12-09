const Product = [
  {
    path: '/Productos',
    name: 'Productos',
    component:() => import ('../Productos.vue'),
  },
  {
    path: '/updateProducto/:id',
    name: 'updateProducto',
    component:() => import ('../updateProducto'),
  },
  //userRoutes,
];
export default Product