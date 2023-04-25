import { db } from "../Utils/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

export const getRestaurants = async () => {
  const restaurantsRef = collection(db, "restaurants");
  const querySnapshot = await getDocs(restaurantsRef);
  const restaurants = [];

  querySnapshot.forEach((doc) => {
    restaurants.push({ id: doc.id, ...doc.data() });
  });

  return restaurants;
};

export const getRestaurantById = async (id) => {
  const restaurantRef = doc(db, "restaurants", id);
  const restaurantDoc = await getDoc(restaurantRef);

  if (restaurantDoc.exists()) {
    return { id: restaurantDoc.id, ...restaurantDoc.data() };
  } else {
    return null;
  }
};
