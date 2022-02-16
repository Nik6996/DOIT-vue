
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";


export const changePassword = {
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
			console.log(item)
			const auth = getAuth();
			const user = auth.currentUser;
			function changePassword() {
				updatePassword(user, item.newPassword).then(() => {
					commit('setSuccess', true)

				}).catch((error) => {
					console.log(error)
				});
			};

			try {

				const credential = EmailAuthProvider.credential(
					user.email,
					item.oldPassword
				);
				await reauthenticateWithCredential(user, credential).then(() => {
					changePassword();
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