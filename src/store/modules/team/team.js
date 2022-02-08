import { database, storage } from "@/firebaseConfig";
import { ref, set, get, } from "firebase/database";
import { ref as refStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export const team = {
	namespaced: true,

	state: () => ({

	}),
	getters: {


	},
	actions: {


	},
	mutations: {
	}
}