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
  onEditExperience: (experience: Experience, index: number) => void;
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
    marginLeft: "auto", // To push it to the right
  };

  const listItemStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // Align elements vertically within the item
    marginBottom: "10px",
    borderBottom: "1px solid #f0f0f0", // Add a border at the bottom of each item
    paddingBottom: "10px", // Add some padding at the bottom
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start", // Align buttons to the left
    marginTop: "10px", // Add some spacing between the description and buttons
  };

  const buttonStyle: React.CSSProperties = {
    marginRight: "10px", // Add some spacing between the buttons
  };

  const headerStyle: React.CSSProperties = {
    color: "#4e94c1", // Blue color
    display: "flex",
    alignItems: "center",
    paddingBottom: "5px", // Add some spacing below the header
  };

const blueLine: React.CSSProperties = {
  width: "30px", // Adjust the width as per your preference
  height: "5px",
  background: "#4e94c1",
  marginRight: "10px", // Add some spacing between the line and title
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
      <h2 style={headerStyle}>
        <span style={blueLine} />
        Work Experience
      </h2>
      <List
        itemLayout="vertical"
        dataSource={experiences}
        renderItem={(item, index) => (
          <List.Item
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={listItemStyle} // Apply flexbox styling to the item
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <p style={companyStyle}>{item.company}</p>
                <p style={jobTitleStyle}>{item.jobTitle}</p>
              </div>
              <p style={dateStyle}>
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p>{item.description}</p>
            {hoveredIndex === index && (
              <div style={buttonContainerStyle}>
                <Button
                  style={buttonStyle}
                  onClick={() => onEditExperience(item, index)}>
                  Edit
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => onDeleteExperience(index)}>
                  Delete
                </Button>
              </div>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default WorkExperienceOutput;
