import React, { useState } from "react";
import { Row, Col } from "antd";
import PersonalInfoInputCard from "./PersonalInfoInputCard";
import PersonalInfoOutputCard from "./PersonalInfoOutputCard";
import WorkExperienceInputCard from "./WorkExperienceInputCard";
import WorkExperienceOutput from "./WorkExperienceOutputCard";

const CVGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [experiences, setExperiences] = useState<any[]>([]);

  const handleAddExperience = (experience: any) => {
    setExperiences([...experiences, experience]);
  };

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

          {/* Work Experience Input Card */}
          <WorkExperienceInputCard onAddExperience={handleAddExperience} />
        </Col>

        <Col xs={24} md={12} style={{ background: "white"}}>
          {/* Personal Info Output Card */}
          <PersonalInfoOutputCard
            name={name}
            email={email}
            website={website}
            phoneNumber={phoneNumber}
            location={location}
            objective={objective}
          />

          {/* Experience List */}
          <WorkExperienceOutput experiences={experiences} />
        </Col>
      </Row>
    </div>
  );
};

export default CVGenerator;
