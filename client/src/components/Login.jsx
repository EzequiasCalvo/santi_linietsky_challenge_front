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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <MainWrapper>
        <div style={{ width: "40%" }}></div>
        <Rightwrapper>
          <SignUpWrapper>
            Don't have an account?
            <TopRightButton>Sign Up</TopRightButton>
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign In</h2>
              <form>
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
