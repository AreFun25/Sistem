import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPost from '../views/BlogPost.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CategoryView from '../views/CategoryView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import AuthorView from '../views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/post',
      name: 'post',
      component: BlogPost,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
  ],
})

export default router
