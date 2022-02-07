import Home from '@/pages/Home'
import Games from '@/pages/Games'
import HomeContent from '@/components/HomeContent'
import SignUpMain from '@/components/login/SignUpMain'
import LoginUser from '@/components/login/LoginUser'
import RestorePassword from '@/components/login/RestorePassword'
import UserMainPage from '@/components/user/UserMainPage'
import Profile from '@/components/user/user-panel/Profile'
import UserPanel from '@/components/user/user-panel/UserPanel'


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
		{
			path: '/user',
			component: UserMainPage,
			children: [
				{
					path: 'profile',
					component: Profile
				},
				{
					path: 'user-panel',
					component: UserPanel
				}
			]
		}
	],
},
{
	path: '/sign-up',
	component: SignUpMain
},
{
	path: '/login',
	component: LoginUser
},
{
	path: '/restore-password',
	component: RestorePassword
},

]



const router = createRouter({
	routes,
	history: createWebHashHistory()
})


export default router