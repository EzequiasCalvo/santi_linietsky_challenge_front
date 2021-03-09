import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo3.png";
import appStore from "../assets/svgs/apple.svg";
import googlePlay from "../assets/svgs/google.svg";
import facebook from "../assets/svgs/facebook_icon.svg";
import instagram from "../assets/svgs/instagram_icon.svg";
import twitter from "../assets/svgs/twitter_icon.svg";

const LeftContainer = styled.div`
  width: 40%;
  height: 100vh;
  background: linear-gradient(100deg, #c468ff, #6e91f6);
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50%;
  & p {
    color: white;
    text-align: center;
    opacity: 0.7;
    font-size: 14px;
    line-height: 1.7;
  }
`;

const Headline = styled.h1`
  color: white;
  font-weight: normal;
`;

const Logo = styled.img`
  width: 85px;
  height: 85px;
`;

const Stores = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StoreButtons = styled.img`
  width: 80px;
  height: 20px;
  padding: 10px 30px;
  border: 1px solid white;
  border-radius: 50px;
  margin: 15px;

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMediaButtons = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

const TwitterButton = styled.img`
  width: 45px;
  height: 45px;
  padding: 10px;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 80px;
  & p {
    color: white;
    font-size: 14px;
  }
`;

const LeftDesign = () => {
  return (
    <LeftContainer>
      <CenterContainer>
        <Logo src={logo} />
        <Headline>Linked</Headline>
        <p>
          Connect with friends and the world <br></br> around you with Linked
        </p>
        <Stores>
          <StoreButtons src={appStore} />
          <StoreButtons src={googlePlay} />
        </Stores>
      </CenterContainer>
      <BottomWrapper>
        <SocialMediaContainer>
          <TwitterButton src={twitter} />
          <SocialMediaButtons src={facebook} />
          <SocialMediaButtons src={instagram} />
        </SocialMediaContainer>
        <p>© Linked 2021. All rights reserved.</p>
      </BottomWrapper>
    </LeftContainer>
  );
};

export default LeftDesign;
