import { Fragment, createContext, useEffect, useState } from "react";
import { auth, db } from "../Utils/firebase";
import { setDoc, doc, onSnapshot } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Notification from "../Components/Common/Popups/Notifications/notifications";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
        const data = doc.data();
        setUserData(data);
      });
      return () => {
        unsubscribe();
      };
    } else {
      setUserData(null);
    }
  }, [user]);

  const createUser = async (name, surname, location, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = {
        name,
        surname,
        email,
        location,
        password,
        memberSince: new Date().toISOString(),
        reviewsCount: 0,
        profileImage: "",
      };

      await setDoc(doc(db, "users", userCredential.user.uid), userData);

      setUser(userCredential.user);
      setMessage("User created successfully");
      return user;
    } catch (error) {
      setMessage(`Error - ${error}`);
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setMessage("Login successful");
      return user;
    } catch (error) {
      setMessage(`Error - ${error}`);
      throw error;
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setMessage("Logout successful");
    } catch (error) {
      console.error(`Error - ${error}`);
      setMessage(error);
      throw error;
    }
  };
  const handleClearMessage = () => {
    setMessage("");
  };

  const isLoggedIn = user !== null;

  const contextValue = {
    createUser,
    loginUser,
    logoutUser,
    user,
    userData,
    setUserData,
    isLoading,
    isLoggedIn,
  };

  return (
    <Fragment>
      {message && (
        <Notification message={message} onClearMessage={handleClearMessage} />
      )}
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </Fragment>
  );
};
