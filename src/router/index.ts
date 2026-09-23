import { createRouter, createWebHashHistory } from 'vue-router'
import PushView from '@/components/push.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PushView,
    },
  ],
})

export default router
