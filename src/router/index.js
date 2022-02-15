import Home from '@/pages/Home'
import Games from '@/pages/Games'
import HomeContent from '@/components/HomeContent'
import SignUpMain from '@/components/login/SignUpMain'
import LoginUser from '@/components/login/LoginUser'
import RestorePassword from '@/components/login/RestorePassword'
import UserMainPage from '@/components/user/UserMainPage'
import Profile from '@/components/user/user-panel/Profile'
import UserPanel from '@/components/user/user-panel/UserPanel'
import Settings from '@/components/user/user-panel/settings/Settings'
import MyTeam from '@/components/user/user-panel/team/MyTeam'
import CreateTeam from '@/components/user/user-panel/team/CreateTeam'
import WithdrawDeposit from '@/components/user/user-panel/withdraw-deposit/WithdrawDeposit'
import EditAccount from '@/components/user/user-panel/settings/EditAccount'
import ChangeEmail from '@/components/user/user-panel/settings/ChangeEmail'
import ChangePassword from '@/components/user/user-panel/settings/ChangePassword'





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
				},
				{
					path: 'settings',
					component: Settings
				},
				{
					path: 'team',
					component: MyTeam
				},
				{
					path: 'create-team',
					component: CreateTeam
				},
				{
					path: 'team:id',
					component: CreateTeam
				},
				{
					path: 'withdraw/deposit',
					component: WithdrawDeposit
				},
				{
					path: 'edit-account',
					component: EditAccount
				},
				{
					path: 'changeEmail',
					component: ChangeEmail
				},
				{
					path: 'changePassword',
					component: ChangePassword
				},
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