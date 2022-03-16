import { database, storage } from "@/firebaseConfig";
import { ref, set, get, update } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const tournament = {
	namespaced: true,

	state: () => ({
		tournaments: '',
		concreteGame: '',
		concreteTournament: ''
	}),
	getters: {
		getTournaments(state) {
			return state.tournaments
		},
		getСoncreteGame(state) {
			return state.concreteGame
		},
		getСoncreteTournament(state) {
			return state.concreteTournament
		}
	},
	actions: {
		async save({ }, item) {

			async function saveBannerImg(img) {
				const storageRef = refStorage(storage, `tournament/${item.gameInfo.banner.id}`)
				await uploadBytes(storageRef, img);
				const url = await getDownloadURL(refStorage(storage, `tournament/${item.gameInfo.banner.id}`))
				item.gameInfo.banner.imgUrl = url;
				item.gameInfo.banner.img = '';
			}
			async function saveBackgroundImg(img) {
				const storageRef = refStorage(storage, `tournament/${item.gameInfo.background.id}`)
				await uploadBytes(storageRef, img);
				const url = await getDownloadURL(refStorage(storage, `tournament/${item.gameInfo.background.id}`))
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

				set(ref(database, `tournament/${item.gameInfo.game}/${item.id}`), {
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
					await set(ref(database, `tournament/${item.oldGame}/${item.id}`), null);
					dispatch('save', item)

				} catch (e) {
					console.log(e);
				}

			}
		},

		async load({ commit }) {

			try {

				const itemsRef = ref(database, `tournament`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {
					const tournaments = []
					itemsRecord.forEach(itemRecord => {

						itemRecord.forEach(item => {
							tournaments.push(item.val())
						})
					});
					commit('setTournaments', tournaments)
				}
			} catch (e) {
				console.log(e);
			}


		},

		async loadConcreteGame({ commit }, game) {

			try {
				const itemsRef = ref(database, `tournament/${game}`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {
					const tournaments = []
					itemsRecord.forEach(itemRecord => {
						tournaments.push(itemRecord.val())
						commit('setСoncreteGame', tournaments)
					});
				} else {
					commit('setСoncreteGame', null)
				}

			} catch (e) { console.log(e) }
		},

		async loadConcreteTournament({ commit }, item) {
			try {
				const itemsRef = ref(database, `tournament/${item.game}/${item.id}`);
				const itemsRecord = await get(itemsRef);
				if (itemsRecord.exists()) {

					commit('setСoncreteTournaments', itemsRecord.val())

				}

			} catch (e) { console.log(e) }
		},

		async remove({ }, idForRemove) {
			try {

				set(ref(database, `tournament/${idForRemove.game}/${idForRemove.idTournament}`), null);
				if (idForRemove.idBanner) {
					const storageBannerRef = refStorage(storage, `tournament/${idForRemove.idBanner}`);
					await deleteObject(storageBannerRef);
				}
				if (idForRemove.idBackground) {
					const storageBackgroundRef = refStorage(storage, `tournament/${idForRemove.idBackground}`);
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
					update(ref(database, `tournament/${item.game}/${item.id}`), {
						players: players
					});
				} else {
					update(ref(database, `tournament/${item.game}/${item.id}`), {
						players: ''
					});
				}


			} catch (e) { console.log(e); }
		}
	},
	mutations: {
		setTournaments(state, tournaments) {
			state.tournaments = tournaments;
		},
		setСoncreteGame(state, tournaments) {
			state.concreteGame = tournaments
		},
		setСoncreteTournaments(state, tournament) {
			state.concreteTournament = tournament
		}
	}
}