import { useState } from "react";
import { EducationContext } from "./App";
import InputForm from "./components/FormContainer";
import { useContext } from "react";
import { useEduStore } from "./lib/store/eduStore";
import { useExpStore } from "./lib/store/expStore";
import FormContainer from "./components/FormContainer";

//Input Section
// function GeneralInformationForm() {
//   const values = useContext(EducationContext);
//   return (
//     <>
//       <form>
//         <h1>General Information</h1>
//         <ul>
//           <li>
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               onChange={(e) => values.setFullName(e.target.value)}
//               defaultValue={values.fullName}
//             />
//           </li>
//           <li>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               onChange={(e) => values.setEmail(e.target.value)}
//               defaultValue={values.email}
//             />
//           </li>
//           <li>
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="tel"
//               id="phone"
//               onChange={(e) => values.setPhone(e.target.value)}
//               defaultValue={values.phone}
//             />
//           </li>
//         </ul>
//       </form>
//     </>
//   );
// }

// function EducationForm({ educationHandler, showForm, id, setShowForm, edu }) {
//   return (
//     <>
//       <form onSubmit={(e) => educationHandler(e, setShowForm)} id={id}>
//         <h1>Education</h1>
//         <ul>
//           <li>
//             <label htmlFor="school">School</label>
//             <input
//               type="text"
//               id="school"
//               defaultValue={edu !== undefined ? edu.school : null}
//             />
//           </li>
//           <li>
//             <label htmlFor="degree">Degree</label>
//             <input
//               type="text"
//               id="degree"
//               defaultValue={edu !== undefined ? edu.degree : null}
//             />
//           </li>
//           <li>
//             <label htmlFor="educationStart">Start Date</label>
//             <input
//               type="date"
//               id="educationStart"
//               defaultValue={edu !== undefined ? edu.educationStart : null}
//             />
//             <label htmlFor="educationEnd">End Date</label>
//             <input
//               type="date"
//               id="educationEnd"
//               defaultValue={edu !== undefined ? edu.educationEnd : null}
//             />
//           </li>
//         </ul>
//         <div>
//           <button type="submit">{showForm == null ? "Add" : "Edit"}</button>
//         </div>
//       </form>
//     </>
//   );
// }
// function EducationPreview() {
//   const [showForm, setShowForm] = useState(null);
//   const values = useContext(EducationContext);
//   const educationItems = values.education.map((edu) => (
//     <div className="ml-5 flex gap-2" key={edu.id}>
//       <div className="bg-gray-400 w-1.5 h-30 rounded-2xl"></div>
//       <div className="flex gap-10">
//         <div>
//           <h3>{edu.degree}</h3>
//           <div>at {edu.school}</div>
//           <div>
//             <i>
//               from : {edu.educationStart} to: {edu.educationEnd}
//             </i>
//           </div>
//         </div>
//         <button
//           className="h-8"
//           id={edu.id}
//           onClick={() =>
//             showForm != edu.id ? setShowForm(edu.id) : setShowForm(null)
//           }
//         >
//           Edit
//         </button>
//       </div>
//       {showForm == edu.id && (
//         <EducationForm
//           educationHandler={values.editEducation}
//           showForm={showForm}
//           id={edu.id}
//           setShowForm={setShowForm}
//           edu={edu}
//         />
//       )}
//     </div>
//   ));
//   return (
//     <div>
//       <h2>Your Education Degrees:</h2>
//       {educationItems}
//     </div>
//   );
// }
// function ExperienceForm({ experienceHandler, showForm, id, setShowForm, exp }) {
//   return (
//     <>
//       <form onSubmit={(e) => experienceHandler(e, setShowForm)} id={id}>
//         <h1>Experience</h1>
//         <ul>
//           <li>
//             <label htmlFor="company">Company</label>
//             <input
//               type="text"
//               id="company"
//               defaultValue={exp !== undefined ? exp.company : null}
//             />
//           </li>
//           <li>
//             <label htmlFor="position">Position</label>
//             <input
//               type="text"
//               id="position"
//               defaultValue={exp !== undefined ? exp.position : null}
//             />
//           </li>
//           <li>
//             <label htmlFor="responsibilities">Responsibilities</label>
//             <input
//               type="text"
//               id="responsibilities"
//               defaultValue={exp !== undefined ? exp.responsibilities : null}
//             />
//           </li>
//           <li>
//             <label htmlFor="experienceStart">Start Date</label>
//             <input
//               type="date"
//               id="experienceStart"
//               defaultValue={exp !== undefined ? exp.experienceStart : null}
//             />
//             <label htmlFor="experienceEnd" c>
//               End Date
//             </label>
//             <input
//               type="date"
//               id="experienceEnd"
//               defaultValue={exp !== undefined ? exp.experienceEnd : null}
//             />
//           </li>
//         </ul>
//         <div>
//           <button type="submit">{showForm == null ? "Add" : "Edit"}</button>
//         </div>
//       </form>
//     </>
//   );
// }
// function ExperiencePreview() {
//   const [showForm, setShowForm] = useState(null);
//   const values = useContext(EducationContext);
//   const experienceItems = values.experience.map((exp) => (
//     <div key={exp.id}>
//       <h3>{exp.position}</h3>
//       <div>at {exp.company}</div>
//       <p>{exp.responsibilities}</p>
//       <div>
//         <i>
//           from : {exp.experienceStart} to: {exp.experienceEnd}
//         </i>
//       </div>
//       <div>
//         <button
//           id={exp.id}
//           onClick={() =>
//             showForm != exp.id ? setShowForm(exp.id) : setShowForm(null)
//           }
//         >
//           Edit
//         </button>
//       </div>
//       {showForm == exp.id && (
//         <ExperienceForm
//           experienceHandler={values.editExperience}
//           showForm={showForm}
//           id={exp.id}
//           setShowForm={setShowForm}
//           exp={exp}
//         />
//       )}
//     </div>
//   ));
//   return (
//     <div>
//       <h2>Your Work Experience:</h2>
//       {experienceItems}
//     </div>
//   );
// }

export default function Input() {
  const {
    education,
    formItems: eduFields,
    addEducation,
    editEducation,
    removeEducation,
  } = useEduStore();
  const {
    experience,
    formItems: expFields,
    addExperience,
    editExperience,
    removeExperience,
  } = useExpStore();
  return (
    <div className="p-2">
      {/* <GeneralInformationForm />*/}
      <div>
        <FormContainer
          title={"Education"}
          fields={eduFields}
          items={education}
          onAdd={addEducation}
          onEdit={editEducation}
          onRemove={removeEducation}
        />
        <FormContainer
          title={"Experience"}
          fields={expFields}
          items={experience}
          onAdd={addExperience}
          onEdit={editExperience}
          onRemove={removeExperience}
        />
      </div>
      {/* <div>
        <ExperienceForm />
        <ExperiencePreview />
      </div>*/}
    </div>
  );
}
