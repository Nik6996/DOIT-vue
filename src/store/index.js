import { createStore } from 'vuex'

import { games } from './modules/games'
import { registration } from './modules/user/registration'
import { loadUser } from './modules/user/loadUser'
import { login } from './modules/user/login'
import { restorePassword } from './modules/user/restorePassword'


export default createStore({
	modules: {
		games: games,
		registration: registration,
		loadUser: loadUser,
		login: login,
		restorePassword: restorePassword
	}

})