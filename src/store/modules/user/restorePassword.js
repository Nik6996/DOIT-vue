import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export const restorePassword = {
	namespaced: true,

	state: () => ({
		mail: ''
	}),
	getters: {
		getMail(state) {
			return state.mail
		}
	},
	actions: {
		async restore({ commit }, item) {

			try {
				const email = item.email
				const auth = getAuth();
				sendPasswordResetEmail(auth, email)
					.then(() => {
						commit('setMail', 'true')
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						// ..
					});


			} catch (e) {
				console.log(e)
			}
		}

	},
	mutations: {
		setMail(state, mail) {
			state.mail = mail
		}
	}
}