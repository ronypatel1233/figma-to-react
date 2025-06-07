import React from 'react';
import styled from 'styled-components';
import aboutBg from '../images/about-bg.png';
import aboutImg from '../images/about-img.png';

const Section = styled.section`
  width: 100%;
  min-height: 1000px;
  background: url(${aboutBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 0;
    min-height: 400px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 0 16px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #222;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Subtext = styled.p`
  font-size: 18px;
  color: #444;
  margin-bottom: 32px;
  max-width: 420px;
`;

const OrangeBar = styled.div`
  width: 180px;
  height: 38px;
  background: #ff7a00;
  border-radius: 19px;
  margin-top: 24px;
margin-left: 20%;
  @media (max-width: 900px) {
    margin: 24px auto 0 auto;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    max-width: 90vw;
  }
`;

const About = () => (
  <Section>
    <ContentWrapper>
      <Left>
        <p style={{marginLeft:"20%", fontSize:"45px" , fontWeight:"bold"}}>About us</p>
        <p style={{marginLeft:"20%", textAlign:"left"} }>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
        </p>
        <OrangeBar  />
      </Left>
      <Right>
        <AboutImage src={aboutImg} alt="About us" />
      </Right>
    </ContentWrapper>
  </Section>
);

export default About; 