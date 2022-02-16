
import { database } from "@/firebaseConfig";
import { ref, set, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";



export const subscribe = {
	namespaced: true,

	state: () => ({

	}),
	getters: {

	},
	actions: {

		async save({ dispatch }, item) {
			async function editBalance(uid) {
				await update(ref(database, "users/" + uid), {
					balance: item.balance - item.sum,
					subscribe: item.item
				});
				await dispatch("loadUser/load", null, { root: true })
			};

			try {
				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						editBalance(userUid);

					}
				});
			} catch (e) {
				console.log(e)
			}
		}

	},
	mutations: {

	}
}