import { createContext, useState } from "react";
import { db } from "../Utils/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import Notification from "../Components/Common/Popups/Notifications/notifications";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const handleClearMessage = () => {
    setMessage("");
  };

  const handleBookingSubmit = async (data) => {
    try {
      const bookingRef = doc(db, "bookings", `${new Date().getTime()}`);
      const bookingData = {
        ...data,
        createdAt: serverTimestamp(),
      };
      await setDoc(bookingRef, bookingData);
      setMessage("Booking saved successfully!");
    } catch (error) {
      console.error("Error saving booking to Firestore:", error);
      setMessage(`Error - ${error}`);
    }
  };

  const handleReviewSubmit = async (data) => {
    try {
      const reviewRef = doc(db, "reviews", `${new Date().getTime()}`);
      const reviewData = {
        ...data,
        createdAt: serverTimestamp(),
      };
      await setDoc(reviewRef, reviewData);
      setMessage("Review saved successfully!");
    } catch (error) {
      console.error("Error saving review to Firestore:", error);
      setMessage(`Error - ${error}`);
    }
  };

  const contextValue = {
    handleBookingSubmit,
    handleReviewSubmit,
  };

  return (
    <>
      {message && (
        <Notification message={message} onClearMessage={handleClearMessage} />
      )}
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </>
  );
};
