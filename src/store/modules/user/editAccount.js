import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL } from "firebase/storage";
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
			async function saveUpload(item, id) {
				if (item.photo) {
					const img = item.photo;
					const storageRef = refStorage(storage, `user/${id}`)
					await uploadBytes(storageRef, img);
					const url = await getDownloadURL(refStorage(storage, `user/${id}`))
					item.photoUrl = url;
					item.photo = ''
				}
				await set(ref(database, `users/${id}`), {
					...item
				})
				await dispatch("loadUser/load", null, { root: true })

			}

			try {

				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						saveUpload(user, userSystem.uid)
					}
				});
			} catch (e) {
				console.log(e)
			} finally {


			}
		}

	},
	mutations: {

	}
}