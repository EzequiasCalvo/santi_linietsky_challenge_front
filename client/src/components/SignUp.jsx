import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../history";
import LeftDesign from "../layout/LeftDesign";
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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var regEx = /\S+@\S+\.\S+/;
    console.log(regEx.test(email));
    if (regEx.test(email) && password.length >= 4) {
      localStorage.setItem("isLogged", true);
      history.push("/");
    } else {
      localStorage.setItem("isLogged", false);
    }
  };

  return (
    <>
      <MainWrapper>
        <LeftDesign />
        <Rightwrapper>
          <SignUpWrapper>
            Don't have an account?
            <Link to="/">
              <TopRightButton>Sign In</TopRightButton>
            </Link>
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <FormFieldWrapper>
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="E-Mail"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    placeholder="Password"
                  />
                </FormFieldWrapper>
                <div className="signin-content">
                  <Button>CONTINUE</Button>
                </div>
              </form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
};

export default SignUp;
