import { createRouter, createWebHistory } from 'vue-router'
import Monitor from "@/view/Monitor.vue";
const routes = [
    {
        path: '/',
        name: '监听页面',
        component: Monitor,
        meta:{
            title: 'AnimeTrace服务状态系统'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router