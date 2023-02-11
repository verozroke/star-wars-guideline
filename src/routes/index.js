import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/HomePage.vue')

const routes = [
    {path: '/fyt-fyt-fristailo/', name: 'Home', component: Home},
    {path: '/fyt-fyt-fristailo/courses', name: 'Courses', component: () => import('../views/CoursesPage.vue')},
    {path: '/fyt-fyt-fristailo/courses/newbie', name: 'CoursesNewbie', component: () => import('../views/course-levels/CoursesNewbie.vue')},
    {path: '/fyt-fyt-fristailo/courses/experienced', name: 'CoursesExperienced', component: () => import('../views/course-levels/CoursesExperienced.vue')},
    {path: '/fyt-fyt-fristailo/courses/pro', name: 'CoursesPro', component: () => import('../views/course-levels/CoursesPro.vue')},
    { path: '/fyt-fyt-fristailo/:pathMatch(.*)*', component:  () => import('../views/Missing.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})


export default router