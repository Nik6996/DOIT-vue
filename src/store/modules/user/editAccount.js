import { database } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//this.$store.getters[`cinema/getCinemas`]


export const edit = {
	namespaced: true,

	state: () => ({

	}),
	getters: {
		getError(state) {
			return state.error
		}
	},
	actions: {
		async save({ dispatch }, user) {

			try {

				const auth = getAuth();
				await onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						set(ref(database, `users/${userSystem.uid}`), {
							...user
						})
					}
				});
				await dispatch("loadUser/load", null, { root: true })
			} catch (e) {
				console.log(e)
			}
		}

	},
	mutations: {

	}
}