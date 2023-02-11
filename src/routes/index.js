import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/HomePage.vue')

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/courses', name: 'Courses', component: () => import('../views/CoursesPage.vue')},
    {path: '/courses/newbie', name: 'CoursesNewbie', component: () => import('../views/course-levels/CoursesNewbie.vue')},
    {path: '/courses/experienced', name: 'CoursesExperienced', component: () => import('../views/course-levels/CoursesExperienced.vue')},
    {path: '/courses/pro', name: 'CoursesPro', component: () => import('../views/course-levels/CoursesPro.vue')},
    { path: '/:pathMatch(.*)*', component:  () => import('../views/Missing.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})


export default router