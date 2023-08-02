import React from "react";
import { Form, Input, Card } from "antd";

const PersonalInformationCard = ({
  name,
  email,
  website,
  phoneNumber,
  location,
  objective,
  onChangeName,
  onChangeObjective,
  onChangeEmail,
  onChangeWebsite,
  onChangePhoneNumber,
  onChangeLocation,
}) => {
  return (
    <Card
      title="Personal Information"
      style={{ background: "#f0f0f0", padding: "10px", margin: "10px" }}>
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input value={name} onChange={onChangeName} />
        </Form.Item>
        <Form.Item label="Objective">
          <Input value={objective} onChange={onChangeObjective} />
        </Form.Item>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "8px" }}>
            <Form.Item label="Email">
              <Input type="email" value={email} onChange={onChangeEmail} />
            </Form.Item>
            <Form.Item label="Website">
              <Input value={website} onChange={onChangeWebsite} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Phone">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </Form.Item>
            <Form.Item label="Location">
              <Input value={location} onChange={onChangeLocation} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default PersonalInformationCard;
