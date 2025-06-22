import MainLayout from './Layout/MainLayout.vue'
import HomePage from '@zems/Front/Pages/HomePage.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
    ],
  },
]
