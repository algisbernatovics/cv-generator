import React from "react";
import { List, Card } from "antd";

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string; // Add description to the Experience interface
}

interface WorkExperienceOutputCardProps {
  experiences: Experience[];
}

const WorkExperienceOutput: React.FC<WorkExperienceOutputCardProps> = ({
  experiences,
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

  return (
    <div style={cardStyle}>
      <h2>Work Experience</h2>
      <List
        itemLayout="vertical"
        dataSource={experiences}
        renderItem={(item) => (
          <List.Item>
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
          </List.Item>
        )}
      />
    </div>
  );
};

export default WorkExperienceOutput;
