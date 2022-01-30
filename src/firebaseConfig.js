import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCW8qFUZm1wiNyvtmgggM0y02pTHZBLBF8",
	authDomain: "doit-a6bd5.firebaseapp.com",
	databaseURL: "https://doit-a6bd5-default-rtdb.firebaseio.com",
	projectId: "doit-a6bd5",
	storageBucket: "doit-a6bd5.appspot.com",
	messagingSenderId: "342794489715",
	appId: "1:342794489715:web:c2b555ed21a3f8942d3f06"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);
