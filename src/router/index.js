import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import Auth from '@/views/auth/Auth.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'

const routes = [
    {
        path: '/campus',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: 'minhas-duvidas',
                name: 'campus.my.supports',
                component: MySupports
            },
            {
                path: 'modulos',
                name: 'campus.modules',
                component: ModulesAndLessons
            },
            {
                path: '',
                name: 'campus.home',
                component: Home
            },
        ]
    },
    {
        path: '/',
        name: 'auth',
        component: Auth
    },
    {
        path: '/',
        name: 'forget.password',
        component: ForgetPassword
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
