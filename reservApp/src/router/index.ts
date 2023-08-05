// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Landing',
        component: () => import('@/views/Login.vue'), //cambiar a landing
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/ForceUserNameCompletion',
        name: 'ForceUserNameCompletion',
        component: () => import('@/views/ForceUserNameCompletion.vue'),
      },
      {
        path: '/Home/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        children: [
          {
            path: 'NewReservation',
            name: 'NewReservation',
            component: () => import('@/views/NewReservation.vue'),
          },
          {
            path: 'MyReservations',
            name: 'MyReservations',
            component: () => import('@/views/MyReservations.vue'),
          },
          {
            path: 'MyAccount',
            name: 'MyAccount',
            component: () => import('@/views/MyAccount.vue'),
          },
        ],
      },
      //------- estos habria q comentarlos creo
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
