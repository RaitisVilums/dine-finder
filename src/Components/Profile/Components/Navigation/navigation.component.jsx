import "./navigation.styles.scss";

const Navigation = ({ handleTabClick, activeTab }) => {
  return (
    <aside className="profile__navigation">
      <nav>
        <ul className="profile__navigation--items">
          <li
            className={
              activeTab === "profile"
                ? "profile__navigation--item active"
                : "profile__navigation--item"
            }
            onClick={() => handleTabClick("profile")}
          >
            Profile
          </li>
          <li
            className={
              activeTab === "messages"
                ? "profile__navigation--item active"
                : "profile__navigation--item"
            }
            onClick={() => handleTabClick("messages")}
          >
            Messages
          </li>
          <li
            className={
              activeTab === "favorites"
                ? "profile__navigation--item  active"
                : "profile__navigation--item"
            }
            onClick={() => handleTabClick("favorites")}
          >
            Favorites
          </li>
          <li
            className={
              activeTab === "reviews"
                ? "profile__navigation--item  active"
                : "profile__navigation--item"
            }
            onClick={() => handleTabClick("reviews")}
          >
            Reviews
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
