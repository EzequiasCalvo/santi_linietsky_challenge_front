import React, { useState } from "react";
import {
  MainWrapper,
  Rightwrapper,
  SignUpWrapper,
  TopRightButton,
  FormWrapper,
  FormInnerWrapper,
  FormFieldWrapper,
  Button,
} from "../style/login";
import LeftDesign from "../layout/LeftDesign";
import history from "../history";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    return history.push("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem("isLogged")) {
      history.push("/welcome");
    } else {
      throw new Error("You are not registered");
    }
  };

  return (
    <>
      <MainWrapper>
        {/* <div style={{ width: "40%" }}></div> */}
        <LeftDesign />
        <Rightwrapper>
          <SignUpWrapper>
            Don't have an account?
            {/* <Link to="/signup"> */}
            <TopRightButton onClick={handleClick}>Sign Up</TopRightButton>
            {/* </Link> */}
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign In</h2>
              <form onSubmit={handleLogin}>
                <FormFieldWrapper>
                  <i className="fas fa-user-circle"></i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="E-Mail"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                </FormFieldWrapper>
                <div className="signin-content">
                  <Button>SIGN IN</Button>
                </div>
              </form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
};

export default Login;
