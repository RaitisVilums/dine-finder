import "./login.styles.scss";
import MainWrapper from "../Common/Main/main";
import Button from "../Common/Button/button";
import FormGroup from "../Common/FormGroup/form-group";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useContexts.hook";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;

    try {
      await loginUser(email, password);
      navigate("/profile");
    } catch (error) {
      console.error(`Error - ${error}`);
      setError(error.message);
    }
  };

  return (
    <MainWrapper>
      <section className="login">
        <h1>
          Welcome to <span>DineFinder</span>
        </h1>
        <h2>Log In</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <FormGroup
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <FormGroup
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <Button className="btn-primary" type="submit">
            Log in
          </Button>
        </form>
        <div className="login__links">
          <Link to="/forgot-password">Forgot password?</Link> <br />
          <Link to="/register">Sign up</Link>
        </div>
        <p>Are you a restaurant owner?</p>
        <p>
          Apply for a special account <Link to="/apply-account">here</Link>.
        </p>
      </section>
    </MainWrapper>
  );
};

export default Login;
