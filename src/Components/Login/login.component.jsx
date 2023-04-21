import "./login.styles.scss";
import MainWrapper from "../Common/Main/main";
import Button from "../Common/Button/button";
import FormGroup from "../Common/FormGroup/form-group";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MainWrapper>
      <section className="login">
        <h1>
          Welcome to <span>DineFinder</span>
        </h1>
        <h2>Log In</h2>
        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          <FormGroup
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <FormGroup
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
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
