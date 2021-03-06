import { database } from "@/firebaseConfig";
import { getAuth, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { ref, update } from "firebase/database";

export const changeEmail = {
	namespaced: true,

	state: () => ({
		isError: false,
		success: false
	}),
	getters: {
		getIsError(state) {
			return state.isError
		},
		getSuccess(state) {
			return state.success
		}
	},
	actions: {
		async change({ commit }, item) {
			const auth = getAuth();

			function changeEmail(uid) {
				updateEmail(auth.currentUser, item.email).then(() => {
					commit('setSuccess', true)
					update(ref(database, "users/" + uid), {
						email: item.email
					});
				}).catch((error) => {
					console.log(error)
				});
			};

			try {
				const user = auth.currentUser;
				const credential = EmailAuthProvider.credential(
					user.email,
					item.password
				);
				await reauthenticateWithCredential(user, credential).then(() => {
					changeEmail(user.uid);
					commit('setSuccess', false)
					commit('setError', false)
				}).catch((error) => {
					console.log(error)
					commit('setError', true)
				});
			} catch (e) {
				console.log(e);
			}
		}

	},
	mutations: {
		setError(state, data) {
			state.isError = data
		},
		setSuccess(state, data) {
			state.success = data
		}
	}
}