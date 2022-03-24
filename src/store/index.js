import { createStore } from 'vuex'

import { games } from './modules/games'
import { registration } from './modules/user/registration'
import { loadUser } from './modules/user/loadUser'
import { login } from './modules/user/login'
import { restorePassword } from './modules/user/restorePassword'
import { team } from './modules/team/team'
import { deposit } from './modules/balance/deposit'
import { history } from './modules/balance/history'
import { withdraw } from './modules/balance/withdraw'
import { edit } from './modules/user/editAccount'
import { changeEmail } from './modules/user/changeEmail'
import { changePassword } from './modules/user/changePassword'
import { subscribe } from './modules/user/subscribe'
import { news } from './modules/news/news'
import { tournament } from './modules/tournament/tournament'
import { leagues } from './modules/leagues/leagues'

export default createStore({
	modules: {
		games: games,
		registration: registration,
		loadUser: loadUser,
		login: login,
		restorePassword: restorePassword,
		team: team,
		deposit: deposit,
		history: history,
		withdraw: withdraw,
		edit: edit,
		changeEmail: changeEmail,
		changePassword: changePassword,
		subscribe: subscribe,
		news: news,
		tournament: tournament,
		leagues: leagues
	}

})