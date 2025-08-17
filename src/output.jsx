function GeneralInformation({ fullName, email, phone }) {
  return (
    <>
      <h1>{fullName}</h1>
      <div>{email}</div>
      <div>{phone}</div>
    </>
  );
}
function CVContent({ education, experience }) {
  const educationItems = education.map((edu) => (
    <div key={edu.id}>
      <h2>{edu.degree}</h2>
      <div>at {edu.school}</div>
      <div>
        from : {edu.educationStart} to: {edu.educationEnd}
      </div>
    </div>
  ));
  const experienceItems = experience.map((exp) => (
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

export default function Output({
  fullName,
  email,
  phone,
  education,
  experience,
}) {
  return (
    <>
      <GeneralInformation fullName={fullName} email={email} phone={phone} />
      <CVContent education={education} experience={experience} />
    </>
  );
}
