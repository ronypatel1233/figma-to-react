import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import bgLayer from '../images/_Layer_.png';

const HeaderBar = styled.header`
  width: 100%;
  background-size: cover;
  border-bottom: 2px solid #f3c623;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 48px 18px 32px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    background-position: center;
  }
`;

const Logo = styled.img`
  height: 56px;
  @media (max-width: 700px) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
    background: #fff;
    position: absolute;
    top: 70px;
    left: 0;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
  }
`;

const NavLink = styled.a`
  font-family: 'Mulish', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.16px;
  color: #232323;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #2563eb;
  }
`;

const ContactButton = styled.a`
  background: linear-gradient(90deg, #ff7a00 0%, #ffb347 100%);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 32px;
  padding: 12px 32px;
  margin-left: 32px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(255, 122, 0, 0.15);
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #ffb347 0%, #ff7a00 100%);
  }

  @media (max-width: 700px) {
    margin-left: 0;
    width: 90%;
    text-align: center;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  padding: 64px 0;

  @media (max-width: 900px) {
    padding: 32px 0;
    min-height: 400px;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: 64px;
  background: rgba(255,255,255,0.85); /* Optional: for readability */
  border-radius: 16px;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin: 0 16px;
    padding: 24px 8px;
    max-width: 100%;
    background: rgba(255,255,255,0.95);
  }
`;

const Subtext = styled.p`
  font-size: 18px;
  color: #444;
  margin-bottom: 32px;
  max-width: 420px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 24px;
  max-width: 420px;
  margin-bottom: 12px;
`;

const CardQuestion = styled.div`
  font-size: 22px;
  color: #222;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

const YesButton = styled.button`
  background: linear-gradient(90deg, #ff7a00 0%, #ffb347 100%);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 32px;
  padding: 10px 36px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #ffb347 0%, #ff7a00 100%);
  }
`;

const NoButton = styled(YesButton)`
  background: #fff;
  color: #ff7a00;
  border: 2px solid #ff7a00;
  &:hover {
    background: #ff7a00;
    color: #fff;
  }
`;

const CardNote = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 8px;
  margin-left: 8px;
`;



const Hero = () => (
  <>
     <div
      style={{
        background: `#f4fdff url(${bgLayer}) no-repeat center center`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh'
      }}
    >
    <HeaderBar>
      <Logo src={logo} alt="Gecko Accountancy" />
      <Nav>
        <div href="#services">Services</div>
        <div href="#about">About us</div>
        <div href="#blogs">Blogs</div>
        <div href="#case-studies">Case Studies</div>
        <ContactButton href="#contact">CONTACT US</ContactButton>
      </Nav>
    </HeaderBar>
    <HeroSection>
      <div>
        <p style={{marginLeft: "16%", textAlign: "left" ,fontSize:"30px", fontWeight: "bold"}}>HOW MUCH<br />COULD YOU SAVE?</p>
        <p style={{marginLeft: "16%", textAlign: "left", fontSize:"19px"}}>
          Answer the questions below to get a fixed price <br/> quotation for us to take your accountancy hassles away from you.
        </p>
        <Card  style={{marginLeft: "16%"}}>
          <p>
            Is your turnover expected to be more than £85k?
          </p>
          <ButtonRow>
            <YesButton>Yes</YesButton>
            <NoButton>No</NoButton>
          </ButtonRow>
        </Card>
        <CardNote>Takes less than 30 seconds</CardNote>
      </div>
    </HeroSection>
    </div>
  </>
);

export default Hero;