import React, { useState } from "react";
import { List, Card, Button } from "antd";

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperienceOutputCardProps {
  experiences: Experience[];
  onEditExperience: (experience: Experience,index:number) => void;
  onDeleteExperience: (index: number) => void;
}

const WorkExperienceOutput: React.FC<WorkExperienceOutputCardProps> = ({
  experiences,
  onEditExperience,
  onDeleteExperience,
}) => {
  const cardStyle: React.CSSProperties = {
    padding: "10px",
    margin: "10px",
  };

  const jobTitleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontFamily: "'Lato', sans-serif",
    margin: 0,
    color: "#4e94c1",
  };

  const companyStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const dateStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#666",
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={cardStyle}>
      <h2>Work Experience</h2>
      <List
        itemLayout="vertical"
        dataSource={experiences}
        renderItem={(item, index) => (
          <List.Item
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <List.Item.Meta
              title={<p style={jobTitleStyle}>{item.jobTitle}</p>}
              description={
                <div>
                  <p style={companyStyle}>{item.company}</p>
                  <p style={dateStyle}>
                    {item.startDate} - {item.endDate}
                  </p>
                  <p>{item.description}</p>
                </div>
              }
            />
            {hoveredIndex === index && (
              <>
                <Button onClick={() => onEditExperience(item,index)}>Edit</Button>
                <Button onClick={() => onDeleteExperience(index)}>
                  Delete
                </Button>
              </>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default WorkExperienceOutput;
