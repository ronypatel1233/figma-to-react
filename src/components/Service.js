import React from 'react';
import styled from 'styled-components';
// Import your icons here, or use <img src="..."/> or SVG inline

const Section = styled.section`
  width: 100%;
  background: #fff;
  padding: 48px 0 64px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #222;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 12px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: transparent;
  text-align: center;
  padding: 24px 12px;
  border-radius: 12px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  }
`;

const Icon = styled.div`
  margin-bottom: 16px;
  svg {
    width: 56px;
    height: 56px;
    stroke: #ff7a00;
    fill: none;
    stroke-width: 2.5;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ServiceDesc = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <line x1="16" y1="16" x2="32" y2="16" />
        <line x1="16" y1="24" x2="32" y2="24" />
        <line x1="16" y1="32" x2="32" y2="32" />
      </svg>
    ),
    title: "Audit & Account",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 16v8l6 4" />
      </svg>
    ),
    title: "Budget & Projections",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <rect x="12" y="20" width="24" height="16" rx="2" />
        <line x1="24" y1="28" x2="24" y2="36" />
        <line x1="18" y1="36" x2="30" y2="36" />
      </svg>
    ),
    title: "Payroll & Bookkeeping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <rect x="10" y="14" width="28" height="20" rx="2" />
        <rect x="16" y="20" width="16" height="8" rx="1" />
      </svg>
    ),
    title: "Software Training & IT",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
  },
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <rect x="12" y="16" width="24" height="16" rx="2" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
    title: "Tax planning & Returns",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam"
  },
  {
    icon: (
      <svg viewBox="0 0 48 48">
        <polyline points="12,36 20,28 28,36 36,20" />
        <circle cx="36" cy="20" r="2" />
      </svg>
    ),
    title: "Management Information",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam"
  }
];

const ServiceSection = () => (
  <Section>
    <Container>
      <Title>Services</Title>
      <Grid>
        {services.map((service, idx) => (
          <ServiceCard key={idx}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDesc>{service.desc}</ServiceDesc>
          </ServiceCard>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default ServiceSection; 