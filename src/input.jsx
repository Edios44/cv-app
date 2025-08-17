import { useState } from "react";

//Input Section
function GeneralInformationForm({
  setFullName,
  setEmail,
  setPhone,
  name,
  email,
  phone,
}) {
  return (
    <>
      <form>
        <h1>General Information</h1>
        <ul>
          <li>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              onChange={(e) => setFullName(e.target.value)}
              defaultValue={name}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={phone}
            />
          </li>
        </ul>
      </form>
    </>
  );
}
function EducationForm({ educationHandler, showForm, id, setShowForm, edu }) {
  return (
    <>
      <form onSubmit={(e) => educationHandler(e, setShowForm)} id={id}>
        <h1>Education</h1>
        <ul>
          <li>
            <label htmlFor="school">School</label>
            <input
              type="text"
              id="school"
              defaultValue={edu !== undefined ? edu.school : null}
            />
          </li>
          <li>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              defaultValue={edu !== undefined ? edu.degree : null}
            />
          </li>
          <li>
            <label htmlFor="educationStart">Start Date</label>
            <input
              type="date"
              id="educationStart"
              defaultValue={edu !== undefined ? edu.educationStart : null}
            />
            <label htmlFor="educationEnd">End Date</label>
            <input
              type="date"
              id="educationEnd"
              defaultValue={edu !== undefined ? edu.educationEnd : null}
            />
          </li>
        </ul>
        <button type="submit">{showForm == null ? "Add" : "Edit"}</button>
      </form>
    </>
  );
}
function EducationPreview({ education, editEducation }) {
  const [showForm, setShowForm] = useState(null);
  const educationItems = education.map((edu) => (
    <div key={edu.id}>
      <h2>{edu.degree}</h2>
      <div>at {edu.school}</div>
      <div>
        from : {edu.educationStart} to: {edu.educationEnd}
      </div>
      <button
        id={edu.id}
        onClick={() =>
          showForm != edu.id ? setShowForm(edu.id) : setShowForm(null)
        }
      >
        Edit
      </button>
      {showForm == edu.id && (
        <EducationForm
          educationHandler={editEducation}
          showForm={showForm}
          id={edu.id}
          setShowForm={setShowForm}
          edu={edu}
        />
      )}
    </div>
  ));
  return (
    <>
      <h2>Education:</h2>
      {educationItems}
    </>
  );
}
function ExperienceForm({ experienceHandler, showForm, id, setShowForm, exp }) {
  return (
    <>
      <form onSubmit={(e) => experienceHandler(e, setShowForm)} id={id}>
        <h1>Experience</h1>
        <ul>
          <li>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              defaultValue={exp !== undefined ? exp.company : null}
            />
          </li>
          <li>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              defaultValue={exp !== undefined ? exp.position : null}
            />
          </li>
          <li>
            <label htmlFor="responsibilities">Responsibilities</label>
            <input
              type="text"
              id="responsibilities"
              defaultValue={exp !== undefined ? exp.responsibilities : null}
            />
          </li>
          <li>
            <label htmlFor="experienceStart">Start Date</label>
            <input
              type="date"
              id="experienceStart"
              defaultValue={exp !== undefined ? exp.experienceStart : null}
            />
            <label htmlFor="experienceEnd">End Date</label>
            <input
              type="date"
              id="experienceEnd"
              defaultValue={exp !== undefined ? exp.experienceEnd : null}
            />
          </li>
        </ul>
        <button type="submit">{showForm == null ? "Add" : "Edit"}</button>
      </form>
    </>
  );
}
function ExperiencePreview({ experience, editExperience }) {
  const [showForm, setShowForm] = useState(null);
  const experienceItems = experience.map((exp) => (
    <div key={exp.id}>
      <h2>{exp.position}</h2>
      <div>at {exp.company}</div>
      <p>{exp.responsibilities}</p>
      <div>
        from : {exp.experienceStart} to: {exp.experienceEnd}
      </div>
      <button
        id={exp.id}
        onClick={() =>
          showForm != exp.id ? setShowForm(exp.id) : setShowForm(null)
        }
      >
        Edit
      </button>
      {showForm == exp.id && (
        <ExperienceForm
          experienceHandler={editExperience}
          showForm={showForm}
          id={exp.id}
          setShowForm={setShowForm}
          exp={exp}
        />
      )}
    </div>
  ));
  return (
    <>
      <h2>Experience:</h2>
      {experienceItems}
    </>
  );
}

export default function Input({
  setFullName,
  setEmail,
  setPhone,
  name,
  email,
  phone,
  education,
  addEducation,
  editEducation,
  experience,
  addExperience,
  editExperience,
}) {
  return (
    <>
      <GeneralInformationForm
        setFullName={setFullName}
        setEmail={setEmail}
        setPhone={setPhone}
        name={name}
        email={email}
        phone={phone}
      />
      <EducationForm educationHandler={addEducation} />
      <EducationPreview education={education} editEducation={editEducation} />
      <ExperienceForm experienceHandler={addExperience} />
      <ExperiencePreview
        experience={experience}
        editExperience={editExperience}
      />
    </>
  );
}
