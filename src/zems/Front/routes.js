import MainLayout from '@zems/Front/Layout/MainLayout.vue'
import HomePage from '@zems/Front/Pages/HomePage.vue'
import AboutPage from '@zems/Front/Pages/AboutPage.vue'
import ContactPage from '@zems/Front/Pages/ContactPage.vue'
import ProjectsPage from '@zems/Front/Pages/ProjectsPage.vue'
import ProjectDetails from '@zems/Front/Pages/ProjectDetails.vue'
import GalleryPage from '@zems/Front/Pages/GalleryPage.vue'
import BlogsPage from './Pages/BlogsPage.vue'
import BlogsDetailsPage from './Pages/BlogsDetailsPage.vue'

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
        path: '/blogs',
        name: 'blogs',
        component: BlogsPage
      },
      {
        path: '/blogs/:slug',
        name: 'blogs-details',
        component: BlogsDetailsPage
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
