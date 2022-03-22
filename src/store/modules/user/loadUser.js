import { database } from "@/firebaseConfig";
import { ref, get, } from "firebase/database";
import { getAuth, onAuthStateChanged, getUser } from "firebase/auth";


export const loadUser = {
	namespaced: true,

	state: () => ({
		user: '',
		userLength: '',
		users: ''
	}),
	getters: {
		getUser(state) {
			return state.user
		},
		getUserLength(state) {
			return state.userLength
		},
		getUsers(state) {
			return state.users
		},
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


		},
		async loadUsers({ commit }) {
			try {

				const userRef = ref(database, `users`)
				const userRecord = await get(userRef);
				if (userRecord.exists()) {
					let users = []
					userRecord.forEach(itemRecord => {
						users.push(itemRecord.val())
					});
					const userLength = users.length
					commit('setUsersLength', userLength);
					commit('setUsers', users)
				}

			} catch (e) {
				console.log(e)
			}
		}


	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		setUsersLength(state, users) {
			state.userLength = users
		},
		setUsers(state, users) {
			state.users = users
		},
	}
}