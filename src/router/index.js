import Home from '@/pages/Home'
import Games from '@/pages/Games'
import HomeContent from '@/components/HomeContent'
import SignUpMain from '@/components/login/SignUpMain'


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
	component: SignUpMain
}
]



const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router