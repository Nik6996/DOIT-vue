import { database } from "@/firebaseConfig";
import { ref, get, } from "firebase/database";
import { getAuth, onAuthStateChanged, getUser } from "firebase/auth";


export const loadUser = {
	namespaced: true,

	state: () => ({
		user: ''
	}),
	getters: {
		getUser(state) {
			return state.user
		}
	},
	actions: {

		async load({ commit }) {
			try {
				async function loadUser(id) {
					const userRef = ref(database, `users/${id}`)
					const userRecord = await get(userRef);
					if (userRecord.exists()) {
						const user = userRecord.val()
						commit('setUser', user)
					}
				}

				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						//	userSystem.uid
						loadUser(userSystem.uid)

					} else {
						commit('setUser', null)
					}
				});

			} catch (e) {
				console.log(e)
			}


		}



	},
	mutations: {
		setUser(state, user) {
			state.user = user
		}
	}
}