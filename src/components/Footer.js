import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const FooterSection = styled.footer`
  background: #eaf6f8;
  border: 1px solid #bfcfd2;
  padding: 48px 0 0 0;
  font-family: 'Mulish', sans-serif;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #bfcfd2;
  padding-bottom: 32px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Tagline = styled.div`
  flex: 2;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  margin-left: 8%;
  @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Email = styled.a`
  color: #00b6ff;
  font-size: 20px;
  text-decoration: none;
  margin-left: 8%;
  @media (max-width: 900px) {
    margin-left: 0;
    display: block;
    text-align: center;
  }
`;

const InfoCol = styled.div`
  flex: 1;
  padding-left: 40px;
  border-left: 1px solid #bfcfd2;
  @media (max-width: 900px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #bfcfd2;
    margin-top: 24px;
    padding-top: 24px;
  }
`;

const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const InfoText = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
  white-space: pre-line;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 16px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Logo = styled.img`
  height: 48px;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 32px;
  font-size: 18px;
  color: #232323;
  a {
    color: #232323;
    text-decoration: none;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    &:hover {
      color: #2563eb;
    }
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Footer = () => {
  const [settings, setSettings] = useState({
    address: '',
    contact_no: '',
    contact_mail: '',
    inquiry_mail: ''
  });

  useEffect(() => {
    fetch('http://3.7.81.243:3253/api/settings/fetch-frontend-details')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setSettings(data.data);
        }
      });
  }, []);

  return (
    <FooterSection>
      <FooterContainer>
        <TopRow>
          <div style={{ flex: 2 }}>
            <Tagline>
              Tagline will go here. Lorem ipsum d oler sit amet...
            </Tagline>
            <Email href={`mailto:${settings.inquiry_mail || 'user@email.com'}`}>
              {settings.inquiry_mail || 'user@email.com'}
            </Email>
          </div>
          <InfoCol>
            <InfoTitle>Address</InfoTitle>
            <InfoText>
              {settings.address || '101 Office No,\nRoad name,\nIndia'}
            </InfoText>
          </InfoCol>
          <InfoCol>
            <InfoTitle>Contacts</InfoTitle>
            <InfoText>
              {settings.contact_mail || 'user@email.com'}
              <br />
              {settings.contact_no || '(276) 341-7690'}
            </InfoText>
          </InfoCol>
        </TopRow>
        <BottomRow>
          <Logo src={logo} alt="Gecko Accountancy" />
          <FooterNav>
            <a href="#about">About</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
          </FooterNav>
          <Copyright>
            <span>&copy; 2022. All rights reserved</span>
          </Copyright>
        </BottomRow>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
