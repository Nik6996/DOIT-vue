import Home from '@/pages/Home'
import Games from '@/pages/Games'
import HomeContent from '@/components/HomeContent'
import SignUp from '@/components/login/SignUp'


import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
	path: '/',
	component: Home,
	children: [
		{
			path: '/',
			component: HomeContent
		},
		{
			path: '/games',
			component: Games
		},

	],
},
{
	path: '/sign-up',
	component: SignUp
}
]



const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router