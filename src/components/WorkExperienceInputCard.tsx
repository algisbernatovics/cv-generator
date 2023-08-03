import React, { useState, useEffect } from "react";
import { Card, Input, DatePicker, Button, Form, Row, Col } from "antd";
import moment from "moment";

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperienceInputCardProps {
  onAddExperience: (experience: Experience) => void;
  onSaveExperience: (index: number | null, experience: Experience) => void; // Update the onSaveExperience prop
  editExperience: Experience | null;
  editExperienceIndex: number | null;
  setEditExperience: (
    experience: Experience | null,
    index: number | null
  ) => void; // Update the setEditExperience prop
}

const WorkExperienceInputCard: React.FC<WorkExperienceInputCardProps> = ({
  onAddExperience,
  onSaveExperience,
  editExperience,
  editExperienceIndex,
  setEditExperience,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editExperience && editExperienceIndex !== null) {
      setIsEditing(true);
      setJobTitle(editExperience.jobTitle);
      setCompany(editExperience.company);
      setStartDate(moment(editExperience.startDate));
      setEndDate(moment(editExperience.endDate));
      setDescription(editExperience.description);
    } else {
      setIsEditing(false);
      setJobTitle("");
      setCompany("");
      setStartDate(null);
      setEndDate(null);
      setDescription("");
    }
  }, [editExperience, editExperienceIndex]);

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

  const handleSaveExperience = () => {
    if (editExperience && editExperienceIndex !== null) {
      const updatedExperience: Experience = {
        ...editExperience,
        jobTitle,
        company,
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
        description,
      };
      onSaveExperience(editExperienceIndex, updatedExperience);
      setEditExperience(null, null);
    }
  };
  // ... (previous code remains the same)

  return (
    <Card
      title={isEditing ? "Edit Work Experience" : "Add Work Experience"}
      style={{ background: "#f0f0f0", padding: "10px", margin: "10px" }}>
      <Form layout="vertical">
        <Form.Item label="Company">
          <Input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Job Title">
          <Input
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Form.Item>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Start Date">
              <DatePicker
                placeholder="Start Date"
                value={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
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
      {isEditing ? (
        <Button
          type="primary"
          onClick={handleSaveExperience}
          style={{ backgroundColor: "green" }}>
          Save Experience
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={handleAddExperience}
          style={{ backgroundColor: "blue" }}>
          Add Work Experience
        </Button>
      )}
    </Card>
  );
};

export default WorkExperienceInputCard;
