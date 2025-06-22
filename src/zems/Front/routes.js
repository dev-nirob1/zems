import MainLayout from './Layout/MainLayout.vue'
import HomePage from '@zems/Front/Pages/HomePage.vue'
import AboutPage from './Pages/AboutPage.vue'
import ContactPage from './Pages/ContactPage.vue'
import ProjectsPage from './Pages/ProjectsPage.vue'

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
      {
        path: '/about',
        name: 'about',
        component: AboutPage,
      },
      {
        path: '/projects',
        name: 'projects',
        component: ProjectsPage,
      },
      {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactPage,
      },
    ],
  },
]
