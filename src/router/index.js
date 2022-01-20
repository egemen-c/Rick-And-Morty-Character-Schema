import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Characters from '/src/views/Characters.vue'
import Locations from '/src/views/Locations.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/characters',
        name: 'Character',
        component: Characters,
    },
    {
        path: '/locations',
        name: 'Locations',
        component: Locations,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router