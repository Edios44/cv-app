import { useState } from "react";

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

//Input Section
function GeneralInformationForm({ setFullName, setEmail, setPhone }) {
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
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </li>
        </ul>
      </form>
    </>
  );
}
function educationHandler(e, addEducation, setShowForm) {
  return addEducation(e, setShowForm);
}
function EducationForm({ addEducation, showForm, id, setShowForm, edu }) {
  return (
    <>
      <form
        onSubmit={(e) => educationHandler(e, addEducation, setShowForm)}
        id={id}
      >
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
          addEducation={editEducation}
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

function Input({
  setFullName,
  setEmail,
  setPhone,
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
      />
      <EducationForm addEducation={addEducation} />
      <EducationPreview education={education} editEducation={editEducation} />
      <ExperienceForm experienceHandler={addExperience} />
      <ExperiencePreview
        experience={experience}
        editExperience={editExperience}
      />
    </>
  );
}

//Output Section
function GeneralInformation({ fullName, email, phone }) {
  return (
    <>
      <h1>{fullName}</h1>
      <div>{email}</div>
      <div>{phone}</div>
    </>
  );
}
function CVContent({ education }) {
  const educationItems = education.map((edu) => (
    <>
      <h2>{edu.degree}</h2>
      <div>at {edu.school}</div>
      <div>
        from : {edu.educationStart} to: {edu.educationEnd}
      </div>
    </>
  ));
  return <>{educationItems}</>;
}

function Output({ fullName, email, phone, education }) {
  return (
    <>
      <GeneralInformation fullName={fullName} email={email} phone={phone} />
      <CVContent education={education} />
    </>
  );
}

function App() {
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
    console.log("hi mom");
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
      />
    </>
  );
}

export default App;
