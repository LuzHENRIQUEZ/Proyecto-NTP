const Proveedores = [
  {
    path: '/Proveedores',
    name: 'Proveedores',
    component:() => import ('../Proveedores.vue'),
  },
  {
    path: '/updateProveedores/:id',
    name: 'updateProveedoress',
    component:() => import ('../updateProveedores'),
  },
];
export default Proveedores