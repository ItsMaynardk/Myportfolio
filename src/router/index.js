// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CertViewView from '../views/CertView.vue';
import AdminView from '../views/AdminView.vue'; // Import AdminView

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/project',
        name: 'Project',
        component: CertViewView
    },
    {
        path: '/admin', // Admin route
        name: 'Admin',
        component: AdminView
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
