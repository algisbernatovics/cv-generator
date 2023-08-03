import React, { useState } from "react";
import PersonalInfoInputCard from "./PersonalInfoInputCard";
import PersonalInfoOutputCard from "./PersonalInfoOutput";
import WorkExperienceInputCard from "./WorkExperienceInputCard";
import WorkExperienceOutput from "./WorkExperienceOutput";

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const CVGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [editExperience, setEditExperience] = useState<Experience | null>(null);
  const [editExperienceIndex, setEditExperienceIndex] = useState<number | null>(
    null
  );

  const handleAddExperience = (experience: Experience) => {
    setExperiences([...experiences, experience]);
  };

  const handleSaveExperience = (index: number, experience: Experience) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = experience;
    setExperiences(updatedExperiences);
    setEditExperience(null);
    setEditExperienceIndex(null);
  };

  const handleEditExperience = (experience: Experience, index: number) => {
    setEditExperience(experience);
    setEditExperienceIndex(index);
  };

  const handleDeleteExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        height: "75%",
        margin: "auto",
      }}>
      <div
        style={{
          flex: 1,
          marginRight: "20px",
          overflowY: "auto", // Enable vertical scrolling
          height: "95%", // Set a fixed height to the input container
        }}>
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
          style={{
            width: "100%", // Set the width of input forms to 100% by default
          }}
        />

        {/* Work Experience Input Card */}
        <WorkExperienceInputCard
          onAddExperience={handleAddExperience}
          onSaveExperience={handleSaveExperience}
          editExperience={editExperience}
          editExperienceIndex={editExperienceIndex}
          setEditExperience={setEditExperience}
          style={{
            width: "100%", // Set the width of input forms to 100% by default
          }}
        />
      </div>

      <div style={{ flex: 1, background: "white", overflow: "hidden" }}>
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
        <WorkExperienceOutput
          experiences={experiences}
          onEditExperience={handleEditExperience}
          onDeleteExperience={handleDeleteExperience}
        />
      </div>
    </div>
  );
};

export default CVGenerator;
