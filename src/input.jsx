import { useState } from "react";
import { EducationContext } from "./App";
import { useContext } from "react";
import { use } from "react";

//Input Section
function GeneralInformationForm({ style }) {
  const values = useContext(EducationContext);
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
              onChange={(e) => values.setFullName(e.target.value)}
              defaultValue={values.fullName}
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
              onChange={(e) => values.setEmail(e.target.value)}
              defaultValue={values.email}
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
              onChange={(e) => values.setPhone(e.target.value)}
              defaultValue={values.phone}
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
        <div className="flex justify-end">
          <button type="submit" className={style.classBtn}>
            {showForm == null ? "Add" : "Edit"}
          </button>
        </div>
      </form>
    </>
  );
}
function EducationPreview({ style, style2nd }) {
  const [showForm, setShowForm] = useState(null);
  const values = useContext(EducationContext);
  const educationItems = values.education.map((edu) => (
    <div key={edu.id} className={style.classContainerSecondary}>
      <h2 className={style.classH3}>{edu.degree}</h2>
      <div className="font-mono">
        <i>at {edu.school}</i>
      </div>
      <div className="text-sm text-gray-500 flex justify-end">
        <i>
          from : {edu.educationStart} to: {edu.educationEnd}
        </i>
      </div>
      <div className="flex justify-end">
        <button
          id={edu.id}
          onClick={() =>
            showForm != edu.id ? setShowForm(edu.id) : setShowForm(null)
          }
          className={style.classBtn}
        >
          Edit
        </button>
      </div>
      {showForm == edu.id && (
        <EducationForm
          educationHandler={values.editEducation}
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
        <div className="flex justify-end">
          <button type="submit" className={style.classBtn}>
            {showForm == null ? "Add" : "Edit"}
          </button>
        </div>
      </form>
    </>
  );
}
function ExperiencePreview({ style, style2nd }) {
  const [showForm, setShowForm] = useState(null);
  const values = useContext(EducationContext);
  const experienceItems = values.experience.map((exp) => (
    <div key={exp.id} className={style.classContainerSecondary}>
      <h3 className={style.classH3}>{exp.position}</h3>
      <div className="font-mono my-2">
        <i>at {exp.company}</i>
      </div>
      <p className="my-4 ml-2">{exp.responsibilities}</p>
      <div className="text-sm text-gray-500 flex justify-end">
        <i>
          from : {exp.experienceStart} to: {exp.experienceEnd}
        </i>
      </div>
      <div className="flex justify-end">
        <button
          id={exp.id}
          onClick={() =>
            showForm != exp.id ? setShowForm(exp.id) : setShowForm(null)
          }
          className={style.classBtn}
        >
          Edit
        </button>
      </div>
      {showForm == exp.id && (
        <ExperienceForm
          experienceHandler={values.editExperience}
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
  const classH1 = "font-extrabold font-serif text-5xl mb-3";
  const classH2 = "font-bold font-serif text-3xl mb-3";
  const classH3 = "font-medium text-2xl mb-3 ";
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
  const values = useContext(EducationContext);
  return (
    <div className="m-8 max-w-2xl">
      <GeneralInformationForm style={style_input} />
      <div className="my-8">
        <EducationForm
          educationHandler={values.addEducation}
          style={style_input}
        />
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
