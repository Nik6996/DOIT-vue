import Home from '@/pages/Home'
import Games from '@/pages/Games'
import Leagues from '@/pages/Leagues'
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
import Support from '@/components/user/user-panel/Support'
import Statistics from '@/components/user/user-panel/Statistics'
import YouTeamTournaments from '@/components/user/user-panel/YouTeamTournaments'
import Subscribe from '@/components/user/user-panel/subscribe/Subscribe'
import NotFound from '@/components/NotFound404'
import NewEditGame from '@/components/games/NewEditGame'
import News from '@/pages/News'
import NewsUpdate from '@/components/news/NewsUpdate'
import CommingSoon from '@/components/other/CommingSoon'
import Tournament from '@/pages/Tournament'
import TournamentAdmin from '@/components/tournament/TournamentAdmin'
import MainTournament from '@/components/tournament/tournament-admin/MainTournament'
import SelectTournament from '@/components/tournament/tournament-admin/SelectTournament'
import ListTournament from '@/components/tournament/tournament-user/ListTournament'
import CardTournament from '@/components/tournament/tournament-user/main-tournament/CardTournament'
import EditBracket from '@/components/tournament/tournament-admin/EditBracket'
import Top from '@/components/top/Top'
import ListLeagues from '@/components/leagues/leagues-user/ListLeagues'
import LeaguesAdmin from '@/components/leagues/LeaguesAdmin'
import MainLeagues from '@/components/leagues/leagues-admin/MainLeagues'
import SelectLeagues from '@/components/leagues/leagues-admin/SelectLeagues'
import CardLeagues from '@/components/leagues/leagues-user/main-leagues/CardLeagues'
import Shop from '@/pages/Shop'
import NewProduct from '@/components/shop/NewProduct'

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
			component: Games,
		},
		{
			path: '/shop',
			component: Shop,
		},
		{
			path: '/leagues',
			component: Leagues,
		},
		{
			path: '/leagues-create',
			component: MainLeagues
		},
		{
			path: '/leagues-select',
			component: SelectLeagues
		},
		{
			path: '/new-edit-games',
			component: NewEditGame
		},
		{
			path: '/new-product',
			component: NewProduct
		},
		{
			path: '/news',
			component: News,
		},
		{
			path: '/update-news',
			component: NewsUpdate
		},
		{
			path: '/tournament',
			component: Tournament,
		},
		{
			path: '/tournament/:game',
			component: ListTournament,
		},
		{
			path: '/leagues/:game',
			component: ListLeagues,
		},
		{
			path: '/tournament/:game/:id',
			component: CardTournament,
		},
		{
			path: '/leagues/:game/:id',
			component: CardLeagues,
		},


		{
			path: '/tournament-admin',
			component: TournamentAdmin
		},
		{
			path: '/leagues-admin',
			component: LeaguesAdmin
		},
		{
			path: '/tournament-create',
			component: MainTournament
		},
		{
			path: '/tournament-bracket:id',
			component: EditBracket
		},
		{
			path: '/tournament-select',
			component: SelectTournament
		},
		{
			path: '/tournament:id',
			component: MainTournament
		},
		{
			path: '/leagues:id',
			component: MainLeagues
		},
		{
			path: '/comming-soon',
			component: CommingSoon
		},
		{
			path: '/top',
			component: Top
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
				{
					path: 'support',
					component: Support
				},
				{
					path: 'statistics',
					component: Statistics
				},
				{
					path: 'team-tournaments',
					component: YouTeamTournaments
				},
				{
					path: 'subscribe',
					component: Subscribe
				},
			]
		},

		{ path: '/:pathMatch(.*)*', component: NotFound }
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