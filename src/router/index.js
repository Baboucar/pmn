import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue';
import Home from "../components/Home.vue";
import Moyens from "../components/Moyens.vue";
import Product from "../components/Product.vue";
import Achievement from "../components/Achievement.vue";
import Contact from "../components/Contact.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
    path:'/about',
    name: 'about',
    component:About
    },
    {
      path:'/moyen',
      name: 'moyen',
      component:Moyens
      },
      {
        path:'/product',
        name: 'product',
        component:Product
        },
        {
          path:'/achievement',
          name: 'achievement',
          component:Achievement
          },
          {
            path:'/contact',
            name: 'contact',
            component:Contact
            },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
