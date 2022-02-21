import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const games = {
	namespaced: true,

	state: () => ({
		games: ''
	}),
	getters: {
		getGames(state) {
			return state.games
		}

	},
	actions: {
		async saveNew({ dispatch }, item) {

			try {
				const storageRef = refStorage(storage, `games/${item.id}`)
				await uploadBytes(storageRef, item.img);
				const url = await getDownloadURL(refStorage(storage, `games/${item.id}`))
				item.img = '';
				item.imgLocalUrl = '';
				item.url = url
				await set(ref(database, `games/${item.id}`), {
					...item,
				})
				await dispatch("games/load", null, { root: true })
			} catch (e) {
				console.log(e)
			}
		},
		async update({ }, item) {

			try {
				if (item.img) {
					const storageRef = refStorage(storage, `games/${item.id}`)
					await uploadBytes(storageRef, item.img);
					const url = await getDownloadURL(refStorage(storage, `games/${item.id}`))
					item.img = '';
					item.imgLocalUrl = '';
					item.url = url;
					await set(ref(database, `games/${item.id}`), {
						...item,
					})
				} else {
					console.log('изменений не найдено');
				}


			} catch (e) {
				console.log(e)
			}
		},
		async load({ commit }) {
			const gamesRef = ref(database, 'games')
			const gamesRecord = await get(gamesRef)
			if (gamesRecord.exists()) {
				const games = []

				gamesRecord.forEach(game => {
					const item = game.val()
					games.push(item)
				})
				commit('setGames', games)
			}
			// const url = await getDownloadURL(refStorage(storage, `games/Valorant.png`))
			// console.log(url)
		},
		async remove({ }, id) {
			console.log(id)

			try {
				set(ref(database, `games/${id}`), null);
				const storageRef = refStorage(storage, `games/${id}`);
				await deleteObject(storageRef);

			} catch (e) {
				console.log(e);
			}
		}

	},
	mutations: {
		setGames(state, games) {
			state.games = games
		}
	}
}