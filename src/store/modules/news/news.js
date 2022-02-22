import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const news = {
	namespaced: true,

	state: () => ({
		news: ''
	}),
	getters: {
		getNews(state) {
			return state.news
		}

	},
	actions: {


		async save({ }, item) {
			async function saveImg() {
				const storageRef = refStorage(storage, `news/${item.gameId}/${item.id}`)
				await uploadBytes(storageRef, item.img.file);
				const url = await getDownloadURL(refStorage(storage, `news/${item.gameId}/${item.id}`))
				item.img.localUrl = '';
				item.img.url = url;
				item.img.file = '';
			}
			try {
				await saveImg();

				await set(ref(database, `news/${item.gameId}/${item.id}`), {
					...item,
				})
			} catch (e) {
				console.log(e)
			}
		},

		async load({ commit }, id) {
			try {

				const newsRef = ref(database, `news/${id}`)
				const newsRecord = await get(newsRef)

				if (newsRecord.exists()) {
					const news = []
					newsRecord.forEach(itemNews => {
						const item = itemNews.val()
						news.push(item)
					})
					commit('setNews', news)
				} else {
					commit('setNews', null)
				}


			} catch (e) { console.log(e) }
		}











		// async load({ commit }) {
		// 	const newsRef = ref(database, 'news')
		// 	const newsRecord = await get(newsRef)
		// 	if (newsRecord.exists()) {
		// 		const news = []

		// 		newsRecord.forEach(game => {
		// 			const item = game.val()
		// 			news.push(item)
		// 		})
		// 		commit('setnews', news)
		// 	}
		// 	// const url = await getDownloadURL(refStorage(storage, `news/Valorant.png`))
		// 	// console.log(url)
		// },
		// async remove({ dispatch }, id) {
		// 	console.log(id)

		// 	try {
		// 		set(ref(database, `news/${id}`), null);
		// 		const storageRef = refStorage(storage, `news/${id}`);
		// 		await deleteObject(storageRef);
		// 		await dispatch("news/load", null, { root: true })
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// }

	},
	mutations: {
		setNews(state, news) {
			state.news = news
		}
	}
}