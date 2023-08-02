import React, { useState } from "react";
import { Card, Input, DatePicker, Button, Form, Row, Col } from "antd";

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperienceInputCardProps {
  onAddExperience: (experience: Experience) => void;
}

const WorkExperienceInputCard: React.FC<WorkExperienceInputCardProps> = ({
  onAddExperience,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [description, setDescription] = useState("");

  const handleAddExperience = () => {
    if (jobTitle && company && startDate && endDate) {
      const experience: Experience = {
        jobTitle,
        company,
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
        description,
      };
      onAddExperience(experience);
      setJobTitle("");
      setCompany("");
      setStartDate(null);
      setEndDate(null);
      setDescription("");
    }
  };

  return (
    <Card
      title="Add Work Experience"
      style={{ background: "#f0f0f0", padding: "10px", margin: "10px" }}>
      <Form layout="vertical">
        <Form.Item label="Company">
          <Input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Item>
        <Row gutter={8}>
          <Col span={16}>
            <Form.Item label="Job Title">
              <Input
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Start Date">
              <DatePicker
                placeholder="Start Date"
                value={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="End Date">
              <DatePicker
                placeholder="End Date"
                value={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Description">
          <Input.TextArea
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handleAddExperience}>
        Add Work Experience
      </Button>
    </Card>
  );
};

export default WorkExperienceInputCard;
