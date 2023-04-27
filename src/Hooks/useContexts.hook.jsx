import { useContext } from "react";
import { RestaurantsContext } from "../Contexts/restaurants.context";
import { AuthContext } from "../Contexts/auth.context";

export const useRestaurants = () => {
  const {
    restaurants,
    isLoading,
    fetchRestaurantById,
    restaurant,
    searchingRestaurant,
  } = useContext(RestaurantsContext);
  return {
    restaurants,
    isLoading,
    fetchRestaurantById,
    restaurant,
    searchingRestaurant,
  };
};

export const useAuth = () => {
  const {
    createUser,
    loginUser,
    logoutUser,
    user,
    userData,
    isLoading,
    isLoggedIn,
  } = useContext(AuthContext);
  return {
    createUser,
    loginUser,
    logoutUser,
    user,
    userData,
    isLoading,
    isLoggedIn,
  };
};
