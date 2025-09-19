import { create } from "zustand";

export const useEduStore = create((set) => ({
  education: [],
  formItems: [
    { name: "school", type: "text", label: "School Name" },
    { name: "degree", type: "text", label: "Degree" },
    { name: "educationStart", type: "date", label: "Start Date" },
    { name: "educationEnd", type: "date", label: "End Date" },
  ],
  addEducation: (nextEdu) =>
    set((state) => ({
      education: [...state.education, nextEdu],
    })),
  editEducation: (nextEdu, id) =>
    set((state) => ({
      education: state.education.map((edu, index) =>
        index === id ? nextEdu : edu,
      ),
    })),
  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((item) => item.id !== id),
    })),
}));
