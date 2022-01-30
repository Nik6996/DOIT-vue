import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
// import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


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
		async load({ commit }) {
			const gamesRef = ref(database, 'games')
			const gamesRecord = await get(gamesRef)
			if (gamesRecord.exists()) {
				const games = []
				let id = 1
				gamesRecord.forEach(game => {
					const item = game.val()
					id++
					if (!item.id) {
						item.id = id
					}
					games.push(item)
				})
				commit('setGames', games)
			}
			// const url = await getDownloadURL(refStorage(storage, `games/Valorant.png`))
			// console.log(url)
		}

	},
	mutations: {
		setGames(state, games) {
			state.games = games
		}
	}
}