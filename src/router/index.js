import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import Admin from '@/views/Admin.vue'
import UserEdit from '@/views/UserEdit.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/admin',
            component: Admin
        },
        {
            path: '/user-edit',
            component: UserEdit
        }
    ] 
})

export default router
