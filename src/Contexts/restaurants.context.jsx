import { createContext, useState, useEffect } from "react";
import { getRestaurants, getRestaurantById } from "../Data/fetchData";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
      setIsLoading(false);
    };
    fetchRestaurants();
  }, []);

  const fetchRestaurantById = async (id) => {
    const data = await getRestaurantById(id);
    setRestaurant(data);
  };

  const contextValue = {
    isLoading,
    restaurants,
    fetchRestaurantById,
    restaurant,
  };

  return (
    <RestaurantsContext.Provider value={contextValue}>
      {children}
    </RestaurantsContext.Provider>
  );
};
