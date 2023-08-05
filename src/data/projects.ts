import type { ProjectInterface } from '@/interfaces/Project.interface';

export default [
    {
        id: 1,
        title: 'HappySport',
        image: '/images/happysport.png',
        url: 'https://happysport.paul-dem.com',
        description: 'Application de gestion de salles de sports et franchises. Gestion des permissions, droits et modules. Login par authentification et redirection en fonction du rôle.',
        category: 'node.js',
        style: 'bootstrap'
    },
    {
        id: 2,
        title: 'Nucifera',
        image: '/images/nucifera.png',
        url: 'https://nucifera.fr',
        description: 'Site vitrine pour créatrice de bijoux personnalisés sur mesure.',
        category: 'wordpress',
        style: ''
    },
    {
        id: 3,
        title: 'My Portfolio',
        image: '/images/portfolio.png',
        url: 'https://portfolio.paul-dem.com',
        description: 'This is my portfolio',
        category: 'vue.js',
        style: 'tailwindcss'
    },
    {
        id: 4,
        title: 'My Portfolio',
        image: '/images/portfolio.png',
        url: 'https://portfolio.paul-dem.com',
        description: 'This is my portfolio',
        category: 'vue.js',
        style: 'tailwindcss'
    },
    

] as ProjectInterface[];