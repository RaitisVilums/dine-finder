import "./profile.styles.scss";
import { useState } from "react";
import MainWrapper from "../Common/Main/main";
import Navigation from "./Components/Navigation/navigation.component";
import ProfilePage from "./Components/Profile/profile.component";
import Messages from "./Components/Messages/messages.component";
import Favorites from "./Components/Favorites/favorites.component";
import Reviews from "./Components/Reviews/reviews.component";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <MainWrapper>
      <section className="profile">
        <Navigation handleTabClick={handleTabClick} activeTab={activeTab} />
        <div className="profile__container">
          {activeTab === "profile" && <ProfilePage />}
          {activeTab === "messages" && <Messages />}
          {activeTab === "favorites" && <Favorites />}
          {activeTab === "reviews" && <Reviews />}
        </div>
      </section>
    </MainWrapper>
  );
};

export default Profile;
