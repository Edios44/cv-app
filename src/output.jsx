import { EducationContext } from "./App";
import { useContext } from "react";

function GeneralInformation() {
  const values = useContext(EducationContext);
  return (
    <>
      <h1>{values.fullName}</h1>
      <div>{values.email}</div>
      <div>{values.phone}</div>
    </>
  );
}

function CVContent() {
  const values = useContext(EducationContext);

  const educationItems = values.education.map((edu) => (
    <div key={edu.id}>
      <h2>{edu.degree}</h2>
      <div>at {edu.school}</div>
      <div>
        from : {edu.educationStart} to: {edu.educationEnd}
      </div>
    </div>
  ));
  const experienceItems = values.experience.map((exp) => (
    <div key={exp.id}>
      <h2>{exp.position}</h2>
      <div>at {exp.company}</div>
      <p>{exp.responsibilities}</p>
      <div>
        from : {exp.experienceStart} to: {exp.experienceEnd}
      </div>
    </div>
  ));
  return (
    <>
      {educationItems}
      {experienceItems}
    </>
  );
}

export default function Output() {
  return (
    <div>
      <GeneralInformation />
      <CVContent />
    </div>
  );
}
