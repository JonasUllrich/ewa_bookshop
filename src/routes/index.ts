import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ShopCatalog from '@/components/organisms/ShopCatalog.vue'
import PaymentSuccess from '@/components/organisms/PaymentSuccess.vue'
import PaymentError from '@/components/organisms/PaymentError.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      { path: '', name: 'home', component: ShopCatalog },
      {
        name: 'payment-success',
        path: '/payment-success',
        component: PaymentSuccess,
      },
      {
        name: 'payment-error',
        path: '/payment-error',
        component: PaymentError,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
