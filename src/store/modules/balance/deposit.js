import { database } from "@/firebaseConfig";
import { ref, set, get, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const deposit = {
	namespaced: true,

	state: () => ({

	}),
	getters: {


	},
	actions: {


		async add({ dispatch, commit }, item) {
			console.log(item);
			async function addDeposit(uid) {
				await update(ref(database, "users/" + uid), {
					balance: item.balance + item.amount
				});
				await dispatch("loadUser/load", null, { root: true })
			}


			try {
				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						addDeposit(userUid)
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