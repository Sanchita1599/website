import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { devices } from "../../data/constants";
import DevicesCard from "../cards/DevicesCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Devices = () => {
  return (
    <Container id="Devices">
      <Wrapper>
        <Title>Devices</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
         Power Research Consulting has successfully designed and developed a wide range of custom devices based on client needs, delivering reliable and efficient solutions.
        </Desc>

        <VerticalTimeline>
          {devices.map((devices, index) => (
            <DevicesCard
              key={`devices-${index}`}
              devices={devices}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Devices;