import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const team = {
	namespaced: true,

	state: () => ({
		teams: ''
	}),
	getters: {
		getTeams(state) {
			return state.teams
		}

	},
	actions: {
		async save({ }, team) {

			async function updateImg(item) {
				const img = item.img;
				const storageRef = refStorage(storage, `team/${team.id}`)
				await uploadBytes(storageRef, img);
				const url = await getDownloadURL(refStorage(storage, `team/${team.id}`))
				team.imgUrl = url;
				team.img = ''
			}
			const auth = getAuth();
			try {
				if (team.img) {
					await updateImg(team)
				}


				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						set(ref(database, `team/${userUid}/${team.id}`), {
							...team,
						})
					}
				});

			} catch (e) {
				console.log(e);
			}

		},

		async load({ commit }) {

			try {

				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						loadTeam(userUid)
					}
				});

				async function loadTeam(uid) {
					const itemsRef = ref(database, `team/${uid}`);
					const itemsRecord = await get(itemsRef);
					if (itemsRecord.exists()) {
						const teams = []
						itemsRecord.forEach(itemRecord => {

							teams.push(itemRecord.val())
						});
						commit('setTeams', teams)
					}
				}

			} catch (e) {
				console.log(e);
			}


		},
		async remove({ }, id) {

			try {
				const auth = getAuth();
				onAuthStateChanged(auth, (userSystem) => {
					if (userSystem) {
						const userUid = userSystem.uid
						removeTeam(userUid)
					}
				});

				async function removeTeam(uid) {
					set(ref(database, `team/${uid}/${id}`), null);
					const storageRef = refStorage(storage, `team/${id}`);
					await deleteObject(storageRef);
				}
			} catch (e) {
				console.log(e);
			}
		}

	},
	mutations: {
		setTeams(state, teams) {
			state.teams = teams
		}
	}
}