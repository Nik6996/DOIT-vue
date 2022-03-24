import { database, storage } from "@/firebaseConfig";
import { ref, set, get, update } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const leagues = {
	namespaced: true,

	state: () => ({
		leagues: '',
		concreteGame: '',
		concreteLeagues: '',
		leaguesLength: '',
		totalPrize: 0,

	}),
	getters: {
		getLeagues(state) {
			return state.leagues
		},
		getСoncreteGame(state) {
			return state.concreteGame
		},
		getСoncreteLeagues(state) {
			return state.concreteLeagues
		},
		getLeaguesLength(state) {
			return state.leaguesLength
		},
		getTotalPrize(state) {
			return state.totalPrize
		}
	},
	actions: {
		async save({ }, item) {

			async function saveBannerImg(img) {
				const storageRef = refStorage(storage, `leagues/${item.gameInfo.banner.id}`)
				await uploadBytes(storageRef, img);
				const url = await getDownloadURL(refStorage(storage, `leagues/${item.gameInfo.banner.id}`))
				item.gameInfo.banner.imgUrl = url;
				item.gameInfo.banner.img = '';
			}
			async function saveBackgroundImg(img) {
				const storageRef = refStorage(storage, `leagues/${item.gameInfo.background.id}`)
				await uploadBytes(storageRef, img);
				const url = await getDownloadURL(refStorage(storage, `leagues/${item.gameInfo.background.id}`))
				item.gameInfo.background.imgUrl = url;
				item.gameInfo.background.img = '';
			}
			try {
				if (item.gameInfo.banner.img) {
					await saveBannerImg(item.gameInfo.banner.img)
				}
				if (item.gameInfo.background.img) {
					await saveBackgroundImg(item.gameInfo.background.img)
				}

				set(ref(database, `leagues/${item.gameInfo.game}/${item.id}`), {
					...item,
				})
			} catch (e) {
				console.log(e);
			}

		},

		async edit({ dispatch }, item) {
			if (item.gameInfo.game === item.oldGame) {
				dispatch('save', item)
			} else {
				try {
					await set(ref(database, `leagues/${item.oldGame}/${item.id}`), null);
					dispatch('save', item)

				} catch (e) {
					console.log(e);
				}

			}
		},

		async load({ commit }) {
			function totalPrize(items) {
				let prize = 0
				items.forEach(item => {
					prize += item.prizePool.prizeSum
				})
				commit('setTotalPrize', prize)
			}
			try {

				const itemsRef = ref(database, `leagues`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {
					const leagues = []
					itemsRecord.forEach(itemRecord => {

						itemRecord.forEach(item => {
							leagues.push(item.val())
						})
					});
					commit('setLeagues', leagues);
					const leaguesLength = leagues.length
					commit('setLeaguesLength', leaguesLength)
					totalPrize(leagues)
				}
			} catch (e) {
				console.log(e);
			}


		},

		async loadConcreteGame({ commit }, game) {

			try {
				const itemsRef = ref(database, `leagues/${game}`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {
					const leagues = []
					itemsRecord.forEach(itemRecord => {
						leagues.push(itemRecord.val())

						commit('setСoncreteGame', leagues)
					});
				} else {
					commit('setСoncreteGame', null)
				}

			} catch (e) { console.log(e) }
		},

		async loadConcreteLeagues({ commit }, item) {
			try {
				const itemsRef = ref(database, `leagues/${item.game}/${item.id}`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {

					commit('setСoncreteLeagues', itemsRecord.val())

				}

			} catch (e) { console.log(e) }
		},

		async remove({ }, idForRemove) {
			try {

				set(ref(database, `leagues/${idForRemove.game}/${idForRemove.idLeagues}`), null);
				if (idForRemove.idBanner) {
					const storageBannerRef = refStorage(storage, `leagues/${idForRemove.idBanner}`);
					await deleteObject(storageBannerRef);
				}
				if (idForRemove.idBackground) {
					const storageBackgroundRef = refStorage(storage, `leagues/${idForRemove.idBackground}`);
					await deleteObject(storageBackgroundRef);
				}


			} catch (e) {
				console.log(e);
			}
		},
		async players({ }, item) {

			try {
				if (item.players.length >= 1) {
					const players = item.players
					update(ref(database, `leagues/${item.game}/${item.id}`), {
						players: players,
						slots: players.length
					});
				} else {
					update(ref(database, `leagues/${item.game}/${item.id}`), {
						players: '',
						slots: 0
					});
				}


			} catch (e) { console.log(e); }
		}
	},
	mutations: {
		setLeagues(state, leagues) {
			state.leagues = leagues;
		},
		setСoncreteGame(state, leagues) {
			state.concreteGame = leagues
		},
		setСoncreteLeagues(state, leagues) {
			state.concreteLeagues = leagues
		},
		setLeaguesLength(state, leaguesLength) {
			state.leaguesLength = leaguesLength
		},
		setTotalPrize(state, prize) {
			state.totalPrize = prize
		}
	}
}