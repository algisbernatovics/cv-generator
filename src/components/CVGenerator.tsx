import React, { useState } from "react";
import { Row, Col } from "antd";
import PersonalInfoInputCard from "./PersonalInfoInputCard";
import PersonalInfoOutputCard from "./PersonalInfoOutputCard";

const CVGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [experiences, setExperiences] = useState([]);

  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} md={12} style={{ marginBottom: "20px" }}>
          {/* Personal Info Input Card */}
          <PersonalInfoInputCard
            name={name}
            email={email}
            website={website}
            phoneNumber={phoneNumber}
            location={location}
            objective={objective}
            onChangeName={(e) => setName(e.target.value)}
            onChangeObjective={(e) => setObjective(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangeWebsite={(e) => setWebsite(e.target.value)}
            onChangePhoneNumber={(e) => setPhoneNumber(e.target.value)}
            onChangeLocation={(e) => setLocation(e.target.value)}
          />
        </Col>

        <Col xs={24} md={12} style={{ marginBottom: "20px" }}>
          {/* Personal Info Output Card */}
          <PersonalInfoOutputCard
            name={name}
            email={email}
            website={website}
            phoneNumber={phoneNumber}
            location={location}
            objective={objective}
          />

        </Col>
      </Row>
    </div>
  );
};

export default CVGenerator;
