import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
// 	apiKey: "AIzaSyDIk_DdoA2k5gAQj-iH7-DxUrUPI0E9uuk",
// 	authDomain: "doit-cec2b.firebaseapp.com",
// 	projectId: "doit-cec2b",
// 	databaseURL: "https://doit-cec2b-default-rtdb.firebaseio.com/",
// 	storageBucket: "doit-cec2b.appspot.com",
// 	messagingSenderId: "874300581401",
// 	appId: "1:874300581401:web:4e016ce91794cedf9dac88"
// };



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
