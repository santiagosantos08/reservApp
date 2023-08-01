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
        component: () => import('@/views/SignUp.vue'), //cambiar a landing
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
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      //aca son comp en vez de views arreglar ese tema
      {
        path: '/comp1',
        name: 'comp1',
        component: () => import('@/components/Comp1.vue'),
      },
      {
        path: '/hello-world',
        name: 'hello-world',
        component: () => import('@/components/HelloWorld.vue'),
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/components/Calendar.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
