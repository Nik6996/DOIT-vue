import { database, storage } from "@/firebaseConfig";
import { ref, set, get, update } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const shop = {
	namespaced: true,

	state: () => ({
		product: ''
	}),
	getters: {
		getProduct(state) {
			return state.product
		}

	},
	actions: {
		async save({ dispatch }, item) {

			try {
				if (item.name && item.img) {
					const storageRef = refStorage(storage, `product/${item.id}`)
					await uploadBytes(storageRef, item.img);
					const url = await getDownloadURL(refStorage(storage, `product/${item.id}`))
					item.img = '';
					item.imgLocalUrl = '';
					item.url = url
					await set(ref(database, `product/${item.id}`), {
						...item,
					})
					await dispatch("shop/load", null, { root: true })
				}

			} catch (e) {
				console.log(e)
			}
		},

		async load({ commit }) {

			try {
				const productRef = ref(database, 'product')
				const productRecord = await get(productRef)
				if (productRecord.exists()) {
					const product = []

					productRecord.forEach(game => {
						const item = game.val()
						product.push(item)
					})
					commit('setProduct', product)
				}
			} catch (e) { console.log(e); }


		},
		async remove({ dispatch }, id) {


			try {
				set(ref(database, `product/${id}`), null);
				const storageRef = refStorage(storage, `product/${id}`);
				await deleteObject(storageRef);
				await dispatch("shop/load", null, { root: true })
			} catch (e) {
				console.log(e);
			}
		},
		async buy({ dispatch }, item) {
			async function editBalance(uid) {
				await update(ref(database, "users/" + uid), {
					balance: item.balance - item.price
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
		setProduct(state, product) {
			state.product = product
		}
	}
}