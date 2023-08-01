// components/PersonalInfo.tsx
import React, { useState } from "react";
import { Form, Input, Typography, Row, Col, Card } from "antd";
import  Title  from "antd/lib/typography/Title";
import CVOutput from "./CVPreview";

const PersonalInfo: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  
  const columnStyle: React.CSSProperties = {
    width: "150%", // Set the width of the content inside columns
  };

  return (
    <div >
      <Row gutter={10}>
        <Col xs={24} md={12} style={{ marginBottom: "20px" }}>
          <Card
            title="Personal Information"
            style={{ background: "#f0f0f0", padding: "10px" }}>
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item label="Objective">
                <Input
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                />
              </Form.Item>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "8px" }}>
                  <Form.Item label="Email">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Website">
                    <Input
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item label="Phone">
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Location">
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={12} style={{ marginBottom: "20px" }}>
          <Card
            style={{ background: "#f0f0f0", padding: "10px" }}>
            <CVOutput
              name={name}
              email={email}
              website={website}
              phoneNumber={phoneNumber}
              location={location}
              objective={objective}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfo;
