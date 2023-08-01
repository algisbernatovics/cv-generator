import React, { useState } from "react";
import { Form, Input, Card } from "antd";

const WorkExperience: React.FC = () => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Card
      title="WORK EXPERIENCE"
      style={{ background: "#f0f0f0", padding: "10px" }}>
      <Form layout="vertical">
        <Form.Item label="Company">
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />
        </Form.Item>
        <Form.Item label="Job Title">
          <Input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Date">
          <Input value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default WorkExperience;
