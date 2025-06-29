import MainLayout from './Layout/MainLayout.vue'
import HomePage from '@zems/Front/Pages/HomePage.vue'
import AboutPage from './Pages/AboutPage.vue'
import ContactPage from './Pages/ContactPage.vue'
import ProjectsPage from './Pages/ProjectsPage.vue'
import ProjectDetails from './Pages/ProjectDetails.vue'
import GalleryPage from './Pages/GalleryPage.vue'

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
        path: '/about-us',
        name: 'about-us',
        component: AboutPage,
      },
      {
        path: '/projects',
        name: 'projects',
        component: ProjectsPage,
      },
      {
        path: '/projects/:slug',
        name: 'project-details',
        component: ProjectDetails
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: GalleryPage
      },
      {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactPage,
      },
    ],
  },
]
