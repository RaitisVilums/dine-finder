import { useContext } from "react";
import { RestaurantsContext } from "../Contexts/restaurants.context";

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
