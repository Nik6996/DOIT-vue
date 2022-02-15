import { database } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//this.$store.getters[`cinema/getCinemas`]


export const registration = {
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
		async save({ commit }, user) {

			try {
				const auth = getAuth();
				const email = user.email;
				const password = user.password;

				await createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in 
						const userInSystem = userCredential.user;
						const uid = userInSystem.uid
						delete user.password
						set(ref(database, `users/${uid}`), {
							...user
						})

					}).catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(errorMessage)
						commit('setError', errorMessage)
					});


			} catch (e) {
				console.log(e)
			}
		}

	},
	mutations: {
		setError(state, error) {
			state.error = error
		}
	}
}