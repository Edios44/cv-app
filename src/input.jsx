import { useState } from "react";

//Input Section
function GeneralInformationForm({
  setFullName,
  setEmail,
  setPhone,
  name,
  email,
  phone,
  style,
}) {
  return (
    <>
      <form>
        <h1 className={style.classH1}>General Information</h1>
        <ul className={style.classUL}>
          <li className={style.classLi}>
            <label htmlFor="fullName" className={style.classLabel}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              onChange={(e) => setFullName(e.target.value)}
              defaultValue={name}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="email" className={style.classLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="phone" className={style.classLabel}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={phone}
              className={style.classInput}
            />
          </li>
        </ul>
      </form>
    </>
  );
}
function EducationForm({
  educationHandler,
  showForm,
  id,
  setShowForm,
  edu,
  style,
}) {
  return (
    <>
      <form onSubmit={(e) => educationHandler(e, setShowForm)} id={id}>
        <h1 className={style.classH1}>Education</h1>
        <ul className={style.classUL}>
          <li className={style.classLi}>
            <label htmlFor="school" className={style.classLabel}>
              School
            </label>
            <input
              type="text"
              id="school"
              defaultValue={edu !== undefined ? edu.school : null}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="degree" className={style.classLabel}>
              Degree
            </label>
            <input
              type="text"
              id="degree"
              defaultValue={edu !== undefined ? edu.degree : null}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="educationStart" className={style.classLabel}>
              Start Date
            </label>
            <input
              type="date"
              id="educationStart"
              defaultValue={edu !== undefined ? edu.educationStart : null}
              className={style.classInput}
            />
            <label htmlFor="educationEnd" className={style.classLabel}>
              End Date
            </label>
            <input
              type="date"
              id="educationEnd"
              defaultValue={edu !== undefined ? edu.educationEnd : null}
              className={style.classInput}
            />
          </li>
        </ul>
        <button type="submit" className={style.classBtn}>
          {showForm == null ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
}
function EducationPreview({ education, editEducation, style, style2nd }) {
  const [showForm, setShowForm] = useState(null);
  const educationItems = education.map((edu) => (
    <div key={edu.id} className={style.classContainerSecondary}>
      <h2 className={style.classH3}>{edu.degree}</h2>
      <div className="">
        <i>at {edu.school}</i>
      </div>
      <div className="text-sm text-gray-500">
        <i>
          from : {edu.educationStart} to: {edu.educationEnd}
        </i>
      </div>
      <button
        id={edu.id}
        onClick={() =>
          showForm != edu.id ? setShowForm(edu.id) : setShowForm(null)
        }
        className={style.classBtn}
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
          style={style2nd}
        />
      )}
    </div>
  ));
  return (
    <div className="my-3">
      <h2 className={style.classH2}>Your Education Degrees:</h2>
      {educationItems}
    </div>
  );
}
function ExperienceForm({
  experienceHandler,
  showForm,
  id,
  setShowForm,
  exp,
  style,
}) {
  return (
    <>
      <form onSubmit={(e) => experienceHandler(e, setShowForm)} id={id}>
        <h1 className={style.classH1}>Experience</h1>
        <ul className={style.classUL}>
          <li className={style.classLi}>
            <label htmlFor="company" className={style.classLabel}>
              Company
            </label>
            <input
              type="text"
              id="company"
              defaultValue={exp !== undefined ? exp.company : null}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="position" className={style.classLabel}>
              Position
            </label>
            <input
              type="text"
              id="position"
              defaultValue={exp !== undefined ? exp.position : null}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="responsibilities" className={style.classLabel}>
              Responsibilities
            </label>
            <input
              type="text"
              id="responsibilities"
              defaultValue={exp !== undefined ? exp.responsibilities : null}
              className={style.classInput}
            />
          </li>
          <li className={style.classLi}>
            <label htmlFor="experienceStart">Start Date</label>
            <input
              type="date"
              id="experienceStart"
              defaultValue={exp !== undefined ? exp.experienceStart : null}
              className={style.classInput}
            />
            <label htmlFor="experienceEnd" className={style.classLabel}>
              End Date
            </label>
            <input
              type="date"
              id="experienceEnd"
              defaultValue={exp !== undefined ? exp.experienceEnd : null}
              className={style.classInput}
            />
          </li>
        </ul>
        <button type="submit" className={style.classBtn}>
          {showForm == null ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
}
function ExperiencePreview({ experience, editExperience, style, style2nd }) {
  const [showForm, setShowForm] = useState(null);
  const experienceItems = experience.map((exp) => (
    <div key={exp.id} className={style.classContainerSecondary}>
      <h3 className={style.classH3}>{exp.position}</h3>
      <div>
        <i>at {exp.company}</i>
      </div>
      <p>{exp.responsibilities}</p>
      <div className="text-sm text-gray-500">
        <i>
          from : {exp.experienceStart} to: {exp.experienceEnd}
        </i>
      </div>
      <button
        id={exp.id}
        onClick={() =>
          showForm != exp.id ? setShowForm(exp.id) : setShowForm(null)
        }
        className={style.classBtn}
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
          style={style2nd}
        />
      )}
    </div>
  ));
  return (
    <div className="my-3">
      <h2 className={style.classH2}>Your Work Experience:</h2>
      {experienceItems}
    </div>
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
  const classContainerPrimary =
    "m-4 border-1 border-gray-400 rounded-md p-3 shadow";
  const classContainerSecondary =
    "m-2 border-2 border-gray-600 rounded-md p-2 shadow";
  const classH1 = "font-extrabold text-5xl mb-3";
  const classH2 = "font-bold text-3xl mb-3";
  const classH3 = "font-medium text-2xl mb-3";
  const classUL = "flex flex-col";
  const classLi = "m-2";
  const classLabel = "font-medium mx-2 w-30 inline-block";
  const classInput =
    "focus:border-gray-500 focus:border-2 rounded-md p-1 outline-none border-2 border-transparent";
  const classBtn =
    "border-1 text-sm p-1.5 rounded-md cursor-pointer shadow mt-4";
  const style_input = {
    classContainerPrimary,
    classH1,
    classUL,
    classLi,
    classLabel,
    classInput,
    classBtn,
  };
  const style_preview = {
    classContainerPrimary,
    classContainerSecondary,
    classH2,
    classH3,
    classBtn,
  };
  return (
    <div className="m-8 max-w-2xl">
      <GeneralInformationForm
        setFullName={setFullName}
        setEmail={setEmail}
        setPhone={setPhone}
        name={name}
        email={email}
        phone={phone}
        style={style_input}
      />
      <div className="my-8">
        <EducationForm educationHandler={addEducation} style={style_input} />
        <EducationPreview
          education={education}
          editEducation={editEducation}
          style={style_preview}
          style2nd={style_input}
        />
      </div>
      <div className="my-8">
        <ExperienceForm experienceHandler={addExperience} style={style_input} />
        <ExperiencePreview
          experience={experience}
          editExperience={editExperience}
          style={style_preview}
          style2nd={style_input}
        />
      </div>
    </div>
  );
}
