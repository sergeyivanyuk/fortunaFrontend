import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage"
import SpinPage from "../pages/SpinPage.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/spin",
        name:'Spin',
        component: SpinPage,
    }
 ]


const router = createRouter({
    routes,
    history: createWebHistory()
    })

export default router;
