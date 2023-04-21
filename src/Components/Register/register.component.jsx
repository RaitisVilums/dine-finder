import "./register.styles.scss";
import Button from "../Common/Button/button";
import { Link } from "react-router-dom";
import MainWrapper from "../Common/Main/main";
import FormGroup from "../Common/FormGroup/form-group";

const Register = () => {
  return (
    <MainWrapper>
      <section className="register">
        <h1>
          Welcome to <span>DineFinder</span>
        </h1>
        <h2>Register</h2>
        <form className="register__form" action="">
          <FormGroup
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
          />
          <FormGroup
            label="Surname"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            required
            type="text"
          />
          <FormGroup
            label="Location"
            id="location"
            name="location"
            placeholder="Enter your location"
            required
            type="text"
          />
          <FormGroup
            label="Email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
          <FormGroup
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            type="password"
          />
          <FormGroup
            label="Repeat Password"
            id="repeat-password"
            name="repeat-password"
            placeholder="Repeat your password"
            required
            type="password"
          />
          <Button className="btn-primary" type="submit">
            Register
          </Button>
        </form>
        <div className="register__links">
          <p>Already have an account?</p>
          <Link to="/login">Log in</Link>
        </div>
      </section>
    </MainWrapper>
  );
};

export default Register;
