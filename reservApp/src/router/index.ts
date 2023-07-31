// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
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
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
