import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue';
import Home from "../components/Home.vue";
import Moyens from "../components/Moyens.vue";
import Product from "../components/Product.vue";
import Achievement from "../components/Achievement.vue";
import Contact from "../components/Contact.vue";
import President from '../components/President.vue';
import Organogram from '../components/Organogram.vue';
import Vision from '../components/Vision.vue';
import Objective from '../components/Objective.vue';
import Promotion from '../components/Promotion.vue';
import Services from '../components/Services.vue';
import Gestion from '../components/Gestion.vue';
import Pdf from '../components/Pdf.vue';
import Gallery from '../components/Gallery.vue';
import Pdfviewer from '../components/Pdfviewer.vue';
import Team from "../components/Team.vue";

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
            {
              path:'/president',
              name: 'president',
              component:President
              },
              {
                path:'/organ',
                name: 'organ',
                component:Organogram
                },
                {
                  path:'/organ',
                  name: 'organ',
                  component:Organogram
                  },
                  {
                    path:'/vision',
                    name:'vision',
                    component:Vision
                  },
                  {
                    path:'/objective',
                    name:'objective',
                    component:Objective
                  },
                  {
                    path:'/promotion',
                    name:'promotion',
                    component:Promotion
                  },
                  {
                    path:'/services',
                    name:'services',
                    component:Services
                  },
                  {
                    path:'/gestion',
                    name:'gestion',
                    component:Gestion
                  },
                  
                  {
                    path:'/gallery',
                    name:'gallery',
                    component:Gallery
                  },
                  {
                    path:'/pdf',
                    name:'pdfviewer',
                    component:Pdfviewer
                  },
                  {
                    path:'/team',
                    name:'team',
                    component:Team
                  }
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
