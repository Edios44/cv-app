import { create } from "zustand";

export const useExpStore = create((set) => ({
  experience: [],
  formItems: [
    { name: "company", type: "text", label: "Company" },
    { name: "position", type: "text", label: "Position" },
    { name: "description", type: "textarea", label: "Description", rows: 4 },
    { name: "experienceStart", type: "date", label: "Start Date" },
    { name: "experienceEnd", type: "date", label: "End Date" },
  ],
  addExperience: (nextExperience) =>
    set((state) => ({
      experience: [...state.experience, nextExperience],
    })),
  editExperience: (nextExperience, id) =>
    set((state) => ({
      experience: state.experience.map((exp, index) =>
        index === id ? nextExperience : exp,
      ),
    })),
  removeExperience: (id) =>
    set((state) => ({
      experience: state.experience.filter((item) => item.id !== id),
    })),
}));
