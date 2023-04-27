import "./register.styles.scss";
import Button from "../Common/Button/button";
import { Link, useNavigate } from "react-router-dom";
import MainWrapper from "../Common/Main/main";
import FormGroup from "../Common/FormGroup/form-group";
import { useAuth } from "../../Hooks/useContexts.hook";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, surname, location, email, password, confirmPassword } =
      formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUser(name, surname, location, email, password);
      setError("");
      setFormData({
        name: "",
        surname: "",
        location: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (error) {
      console.error(`Error - ${error}`);
      setError(error.message);
    }
  };

  return (
    <MainWrapper>
      <section className="register">
        <h1>
          Welcome to <span>DineFinder</span>
        </h1>
        <h2>Register</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <FormGroup
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <FormGroup
            label="Surname"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            required
            type="text"
            value={formData.surname}
            onChange={handleChange}
          />
          <FormGroup
            label="Location"
            id="location"
            name="location"
            placeholder="Enter your location"
            required
            type="text"
            value={formData.location}
            onChange={handleChange}
          />
          <FormGroup
            label="Email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormGroup
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormGroup
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button className="btn-primary" type="submit">
            Register
          </Button>
        </form>
        <div className="register__links">
          <p>Already have an account?</p>
          <Link to="/login">Log in</Link>
        </div>
        {error && <p>{error}</p>}
      </section>
    </MainWrapper>
  );
};

export default Register;
