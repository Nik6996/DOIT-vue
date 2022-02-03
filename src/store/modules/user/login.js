
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const login = {
	namespaced: true,

	state: () => ({
		error: ''
	}),
	getters: {
		getError(state) {
			return state.error
		}
	},
	actions: {
		async login({ commit }, item) {
			try {
				const auth = getAuth();
				const email = item.email;
				const password = item.password;
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in 
						const user = userCredential.user;
						// ...
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(errorMessage)
						commit('setError', errorMessage)
					});
			} catch (e) {
				console.log(e);
			}
		}

	},
	mutations: {
		setError(state, error) {
			state.error = error
		}
	}
}