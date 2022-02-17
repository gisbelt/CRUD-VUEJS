import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//Importando las nuevas rutas
import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Agregando nuevas rutas
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  //Agregando nuevas rutas
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
