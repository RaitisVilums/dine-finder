import "./profile.styles.scss";
import Restaurant from "../../../../Assets/chew.png";
import Button from "../../../Common/Button/button";
import Input from "../../../Common/Input/input";
import { useState } from "react";
import { useAuth } from "../../../../Hooks/useContexts.hook";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logoutUser, userData } = useAuth();

  const [name, setName] = useState(userData.name);
  const [surname, setSurname] = useState(userData.surname);
  const [email, setEmail] = useState(userData.email);
  const [location, setLocation] = useState(userData.location);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [editable, setEditable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
  };
  const logOutHandler = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="profile__container--item">
      <div className="profile__overall--info">
        <img src={Restaurant} alt="" />
        <div className="profile__stats">
          <div className="profile__stats--item">
            <p>
              <span>0</span>
            </p>
            <p>Reviews</p>
          </div>
          <div className="profile__stats--item">
            <p>
              <span>0</span>
            </p>
            <p>Bookings</p>
          </div>
          <div className="profile__stats--item">
            <p>
              <span>0</span>
            </p>
            <p>Likes</p>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <div className="profile__content--btns">
          <Button className={`btn-secondary`} onClick={() => setEditable(true)}>
            Edit
          </Button>
          <Button
            className={`btn-secondary`}
            onClick={() => setEditable(false)}
          >
            Save
          </Button>
          <Button className={`btn-secondary`} onClick={() => logOutHandler()}>
            Log out
          </Button>
        </div>
        <form className="profile__content--form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Surname"
            name="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Location"
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            readOnly={editable}
          />
          <Input
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            readOnly={editable}
          />
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
