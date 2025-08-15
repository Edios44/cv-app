import { useState } from "react";

//Data Section
class EducationCreator {
  constructor(school, degree, educationStart, educationEnd) {
    this.school = school;
    this.degree = degree;
    this.educationStart = educationStart;
    this.educationEnd = educationEnd;
  }
}

class ExperienceCreator {
  constructor(
    company,
    position,
    responsibilities,
    experienceStart,
    experienceEnd,
  ) {
    this.company = company;
    this.position = position;
    this.responsibilities = responsibilities;
    this.experienceStart = experienceStart;
    this.experienceEnd = experienceEnd;
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
function EducationForm() {
  return (
    <>
      <form>
        <h1>Education</h1>
        <ul>
          <li>
            <label htmlFor="school">School</label>
            <input type="text" id="school" />
          </li>
          <li>
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" />
          </li>
          <li>
            <label htmlFor="educationStart">Start Date</label>
            <input type="date" id="educationStart" />
            <label htmlFor="educationEnd">End Date</label>
            <input type="date" id="educationEnd" />
          </li>
        </ul>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
function EducationPreview() {}
function ExperienceForm() {
  return (
    <>
      <form>
        <h1>Experience</h1>
        <ul>
          <li>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </li>
          <li>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" />
          </li>
          <li>
            <label htmlFor="responsibilities">Responsibilities</label>
            <input type="text" id="responsibilities" />
          </li>
          <li>
            <label htmlFor="experienceStart">Start Date</label>
            <input type="date" id="experienceStart" />
            <label htmlFor="experienceEnd">End Date</label>
            <input type="date" id="experienceEnd" />
          </li>
        </ul>
      </form>
    </>
  );
}
function ExperiencePreview() {}

function Input({ setFullName, setEmail, setPhone }) {
  return (
    <>
      <GeneralInformationForm
        setFullName={setFullName}
        setEmail={setEmail}
        setPhone={setPhone}
      />
      <EducationForm />
      <EducationPreview />
      <ExperienceForm />
      <ExperiencePreview />
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
function CVContent() {}

function Output({ fullName, email, phone }) {
  return (
    <>
      <GeneralInformation fullName={fullName} email={email} phone={phone} />
      <CVContent />
    </>
  );
}

function App() {
  const [fullName, setFullName] = useState("Jhon Smith");
  const [email, setEmail] = useState("jhonsmith@example.com");
  const [phone, setPhone] = useState("1234567890");

  return (
    <>
      <Input
        setFullName={setFullName}
        setEmail={setEmail}
        setPhone={setPhone}
      />
      <Output fullName={fullName} email={email} phone={phone} />
    </>
  );
}

export default App;
