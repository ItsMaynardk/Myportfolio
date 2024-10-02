// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CertViewView from '../views/CertView.vue';
import AdminView from '../views/AdminView.vue'; // Admin Dashboard

// Import admin-specific views for managing CRUD for Home, About, and Certificates
import AdminHome from '../views/admin/AdminHome.vue'; // Admin Home CRUD
import AdminAbout from '../views/admin/AdminAbout.vue'; // Admin About CRUD
import AdminCertificates from '../views/admin/AdminCertificates.vue'; // Admin Certificates CRUD

const routes = [
    {
        path: '/', // Public Home Page
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about', // Public About Page
        name: 'About',
        component: AboutView
    },
    {
        path: '/project', // Public Certificates/Project Page
        name: 'Project',
        component: CertViewView
    },
    {
        path: '/admin', // Main Admin Dashboard
        name: 'Admin',
        component: AdminView
    },
    {
        path: '/admin/home', // Admin Home Section for managing Home content (CRUD)
        name: 'AdminHome',
        component: AdminHome
    },
    {
        path: '/admin/about', // Admin About Section for managing About content (CRUD)
        name: 'AdminAbout',
        component: AdminAbout
    },
    {
        path: '/admin/certificates', // Admin Certificates Section for managing Certificates content (CRUD)
        name: 'AdminCertificates',
        component: AdminCertificates
    },
    {
        path: '/:catchAll(.*)', // Redirect any unknown path to the Home page
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
