import React from "react";
import { TopRightButton, SignUpWrapper } from "../style/login";
import history from "../history";

const Welcome = () => {
  const handleClick = () => {
    localStorage.setItem("isLogged", false);
    history.push("/");
  };
  return (
    <div>
      <SignUpWrapper>
        <h1 style={{ marginRight: "250px" }}>WELCOME TO LINKED!! 🔥🔥</h1>
        <TopRightButton
          onClick={handleClick}
          style={{ backgroundColor: "rgb(234, 72, 72)" }}
        >
          Log Out
        </TopRightButton>
      </SignUpWrapper>
    </div>
  );
};

export default Welcome;
