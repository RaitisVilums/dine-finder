import { useContext } from "react";
import { RestaurantsContext } from "../Contexts/restaurants.context";
import { AuthContext } from "../Contexts/auth.context";
import { FormContext } from "../Contexts/form.context";

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

export const useForm = () => {
  const { handleBookingSubmit, handleReviewSubmit } = useContext(FormContext);

  return {
    handleBookingSubmit,
    handleReviewSubmit,
  };
};
