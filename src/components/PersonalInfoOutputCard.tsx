import React from "react";
import {
  UserOutlined,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Row, Col, Card } from "antd";

const CVPersonalInf: React.FC<{
  name: string;
  email: string;
  website: string;
  phoneNumber: string;
  location: string;
  objective: string;
}> = ({ name, email, website, phoneNumber, location, objective }) => {
  const containerStyle: React.CSSProperties = {
    marginBottom: "20px",
  };

  const blueLineStyle: React.CSSProperties = {
    borderBottom: "4px solid #b2d4e3", // Use a lighter blue color for the line at the top
    marginBottom: "10px",
  };

  const nameStyle: React.CSSProperties = {
    fontSize: "24px",
    fontFamily: "'Lato', sans-serif",
    margin: 0,
    color: "#4e94c1", // Use light blue color for the name
  };

  const infoContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
    marginBottom: "10px",
  };

  const infoTextStyle: React.CSSProperties = {
    margin: 0,
    marginLeft: "5px", // Add some left margin to the text to separate it from the icon
  };

  return (
    <div style={containerStyle}>
      <div style={blueLineStyle}></div> {/* Blue line at the top */}
      <p style={nameStyle}>{name}</p>
      <p>{objective}</p>
      <Row gutter={16} style={infoContainerStyle}>
        <Col>
          <p style={infoTextStyle}>
            <MailOutlined /> {email}
          </p>
        </Col>
        <Col>
          <p style={infoTextStyle}>
            <PhoneOutlined /> {phoneNumber}
          </p>
        </Col>
        <Col>
          <p style={infoTextStyle}>
            <GlobalOutlined /> {location}
          </p>
        </Col>
      </Row>
      <p>Website: {website}</p>
    </div>
  );
};

const PersonalInfoOutputCard = ({
  name,
  email,
  website,
  phoneNumber,
  location,
  objective,
}) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
      }}>
      <CVPersonalInf
        name={name}
        email={email}
        website={website}
        phoneNumber={phoneNumber}
        location={location}
        objective={objective}
      />
    </div>
  );
};

export default PersonalInfoOutputCard;
