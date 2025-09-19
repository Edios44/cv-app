import { useState, useEffect } from "react";
import FormInput from "./FormInput";

export default function DynamicForm({
  title,
  fields,
  onSubmit,
  initialData = {},
  submitText = "Submit",
  isEdit = false,
}) {
  const [formData, setFormData] = useState(initialData);

  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    onSubmit(submitData, isEdit);

    // Reset form if not editing
    if (!isEdit) {
      setFormData({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {fields.map((field) => (
        <FormInput
          key={field.name}
          field={field}
          value={formData[field.name] || ""}
          onChange={handleFieldChange}
        />
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        {submitText}
      </button>
    </form>
  );
}
