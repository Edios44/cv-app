import React from "react";
import { useState } from "react";
import Input from "./input";
import Output from "./output";
//Data Section
class EducationCreator {
  constructor(school, degree, educationStart, educationEnd, id) {
    this.school = school;
    this.degree = degree;
    this.educationStart = educationStart;
    this.educationEnd = educationEnd;
    this.id = id;
  }
}

class ExperienceCreator {
  constructor(
    company,
    position,
    responsibilities,
    experienceStart,
    experienceEnd,
    id,
  ) {
    this.company = company;
    this.position = position;
    this.responsibilities = responsibilities;
    this.experienceStart = experienceStart;
    this.experienceEnd = experienceEnd;
    this.id = id;
  }
}

export const EducationContext = React.createContext();
export default function App() {
  const [fullName, setFullName] = useState("Jhon Smith");
  const [email, setEmail] = useState("jhonsmith@example.com");
  const [phone, setPhone] = useState("1234567890");

  const exampleSchool = new EducationCreator(
    "Oxford University",
    "Chemistry",
    "2010-10-10",
    "2015-10-10",
    1000,
  );
  const exampleExperience = new ExperienceCreator(
    "Meta",
    "Junior Developper",
    "contributing to feature development, fixing bugs, writing clean and maintainable code, and collaborating closely with senior engineers to learn and ensure product stability.",
    "2010-10-10",
    "2015-10-10",
    5000,
  );

  return (
    <div>
      {/* <EducationContext.Provider
        value={{
          setFullName,
          setEmail,
          setPhone,
          fullName,
          email,
          phone,
        }}
      >*/}
      <Input />
      {/* </EducationContext.Provider>*/}
    </div>
  );
}
