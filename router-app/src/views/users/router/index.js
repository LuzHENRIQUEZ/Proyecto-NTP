const userRoutes = [
    {
      path: '/Usuarios',
      name: 'usuarios',
      component:() => import ('../Usuarios.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component:() => import ('../LoginView.vue'),
    },
    {
      path: '/updateUsuarios/:id',
      name: 'updateUsuarios',
      component:() => import ('../updateUsuarios'),
    },
  ];
  export default userRoutes