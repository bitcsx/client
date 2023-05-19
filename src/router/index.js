import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import JobView from '../views/JobView'
import ExperienceView from '../views/ExperienceView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import NotFoundView from '../views/NotFoundView'
import WriteView from '../views/WriteView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/job',
    name: 'job',
    component: JobView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/write',
    name: 'write',
    component: WriteView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
