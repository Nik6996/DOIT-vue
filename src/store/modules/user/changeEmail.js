
import { getAuth, updateEmail } from "firebase/auth";


export const changeEmail = {
	namespaced: true,

	state: () => ({

	}),
	getters: {

	},
	actions: {
		async change({ commit }, email) {
			console.log(email)
			// try {
			// 	const auth = getAuth();
			// 	console.log(auth.currentUser)
			// 	await updateEmail(auth.currentUser, email).then(() => {
			// 		console.log('yes!');


			// 	}).catch((error) => {
			// 		console.log(error);
			// 		// An error occurred
			// 		// ...
			// 	});
			// } catch (e) {
			// 	console.log(e);
			// }
		}

	},
	mutations: {

	}
}