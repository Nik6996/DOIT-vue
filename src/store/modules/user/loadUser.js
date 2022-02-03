import { database } from "@/firebaseConfig";
import { ref, get, } from "firebase/database";



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
		async load({ commit }, id) {

			try {
				const userRef = ref(database, `users/${id}`)
				const userRecord = await get(userRef);
				if (userRecord.exists()) {

					const user = userRecord.val()
					commit('setUser', user)
				}

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