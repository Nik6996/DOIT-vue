import Home from '@/pages/Home'

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
	path: '/',
	component: Home,
}
]



const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router