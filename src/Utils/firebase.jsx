import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { doc, setDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnv92poiAB-ODeFynt-PUGOBRpNcIJeHY",
  authDomain: "dinefinder-37828.firebaseapp.com",
  projectId: "dinefinder-37828",
  storageBucket: "dinefinder-37828.appspot.com",
  messagingSenderId: "973576440462",
  appId: "1:973576440462:web:55817db8d8eff869db97df",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// ! Uploading JSON to firebase collection
// export const restaurant = [
// // JSON
// ];

// const restaurantsRef = collection(db, "restaurants");

// restaurant.forEach(async (r) => {
//   await setDoc(doc(restaurantsRef, r.id.toString()), r);
// });

// console.log(restaurant);
