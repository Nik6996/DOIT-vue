import Home from '@/pages/Home'
import HomeContent from '@/components/HomeContent'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
	path: '/',
	component: Home,
	children: [
		{
			path: '/',
			component: HomeContent
		}
	]
}
]



const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router