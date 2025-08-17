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

export default function App() {
  const [fullName, setFullName] = useState("Jhon Smith");
  const [email, setEmail] = useState("jhonsmith@example.com");
  const [phone, setPhone] = useState("1234567890");

  const exampleSchool = new EducationCreator(
    "Oxford University",
    "chemistry",
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
  const [education, setEducation] = useState([exampleSchool]);
  const [experience, setExperience] = useState([exampleExperience]);
  function addEducation(e) {
    e.preventDefault();
    const prevElement = education[education.length - 1];

    const school = e.target.elements.school.value;
    const degree = e.target.elements.degree.value;
    const educationStart = e.target.elements.educationStart.value;
    const educationEnd = e.target.elements.educationEnd.value;
    const id = prevElement.id + 1;

    setEducation([
      ...education,
      new EducationCreator(school, degree, educationStart, educationEnd, id),
    ]);
  }
  function addExperience(e) {
    e.preventDefault();
    const prevElement = experience[experience.length - 1];

    const company = e.target.elements.company.value;
    const position = e.target.elements.position.value;
    const responsibilities = e.target.elements.responsibilities.value;
    const experienceStart = e.target.elements.experienceStart.value;
    const experienceEnd = e.target.elements.experienceEnd.value;
    const id = prevElement.id + 1;

    setExperience([
      ...experience,
      new ExperienceCreator(
        company,
        position,
        responsibilities,
        experienceStart,
        experienceEnd,
        id,
      ),
    ]);
  }
  function editEducation(e, setShowForm) {
    e.preventDefault();
    const editedItem = education.find((edu) => edu.id == e.target.id);
    editedItem.school = e.target.elements.school.value;
    editedItem.degree = e.target.elements.degree.value;
    editedItem.educationStart = e.target.elements.educationStart.value;
    editedItem.educationEnd = e.target.elements.educationEnd.value;
    setShowForm(null);
  }
  function editExperience(e, setShowForm) {
    e.preventDefault();
    const editedItem = experience.find((exp) => exp.id == e.target.id);
    editedItem.company = e.target.elements.company.value;
    editedItem.position = e.target.elements.position.value;
    editedItem.responsibilities = e.target.elements.responsibilities.value;
    editedItem.experienceStart = e.target.elements.experienceStart.value;
    editedItem.experienceEnd = e.target.elements.experienceEnd.value;
    setShowForm(null);
  }

  return (
    <>
      <Input
        setFullName={setFullName}
        setEmail={setEmail}
        setPhone={setPhone}
        name={fullName}
        email={email}
        phone={phone}
        education={education}
        addEducation={addEducation}
        editEducation={editEducation}
        experience={experience}
        addExperience={addExperience}
        editExperience={editExperience}
      />
      <Output
        fullName={fullName}
        email={email}
        phone={phone}
        education={education}
        experience={experience}
      />
    </>
  );
}
