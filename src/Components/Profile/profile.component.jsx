import "./profile.styles.scss";
import { useState } from "react";
import MainWrapper from "../Common/Main/main";
import Navigation from "./Components/Navigation/navigation.component";
import ProfilePage from "./Components/Profile/profile.component";
import Messages from "./Components/Messages/messages.component";
import Favorites from "./Components/Favorites/favorites.component";
import Reviews from "./Components/Reviews/reviews.component";
import { motion } from "framer-motion";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <MainWrapper>
      <section className="profile">
        <Navigation handleTabClick={handleTabClick} activeTab={activeTab} />
        <div className="profile__container">
          {activeTab === "profile" && (
            <motion.div
              className="profile__page"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <ProfilePage />
            </motion.div>
          )}
          {activeTab === "messages" && (
            <motion.div
              className="profile__page"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <Messages />
            </motion.div>
          )}
          {activeTab === "favorites" && (
            <motion.div
              className="profile__page"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <Favorites />
            </motion.div>
          )}
          {activeTab === "reviews" && (
            <motion.div
              className="profile__page"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <Reviews />
            </motion.div>
          )}
        </div>
      </section>
    </MainWrapper>
  );
};

export default Profile;
