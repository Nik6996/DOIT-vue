import { database } from "@/firebaseConfig";
import { ref, set, get, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const history = {
	namespaced: true,

	state: () => ({
		history: null
	}),
	getters: {
		getHistory(state) {
			return state.history
		}

	},
	actions: {

		async loadHistory({ commit }) {
			async function loadHistory(uid) {

				const itemsRef = ref(database, `history/users/${uid}`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {
					const history = []
					itemsRecord.forEach(itemRecord => {

						history.push(itemRecord.val())
					});
					commit('setHistory', history)
				}
			}
			try {
				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						loadHistory(userUid)
					}
				});



			} catch (e) {
				console.log(e);
			}
		}

	},
	mutations: {
		setHistory(state, history) {
			state.history = history
		}
	}
}