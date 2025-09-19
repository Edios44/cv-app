import { useState } from "react";
import DynamicForm from "./DynamicForm";

export default function FormContainer({
  title,
  fields,
  items,
  onAdd,
  onEdit,
  onRemove,
}) {
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (data, isEdit) => {
    if (isEdit) {
      // Find the index of the item being edited
      const itemIndex = items.findIndex((item) => item.id === editingId);
      onEdit(data, itemIndex);
      setEditingId(null); // Close the edit form
    } else {
      onAdd(data);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <DynamicForm
        title={`Add ${title}`}
        fields={fields}
        onSubmit={handleSubmit}
        submitText={`Add ${title}`}
        isEdit={false}
      />

      {/* Display existing items */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{title} List</h3>
        {items.map((item) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
            {editingId === item.id ? (
              // Show edit form
              <div>
                <DynamicForm
                  key={item.id} // Forces remount when editing different items
                  title={`Edit ${title}`}
                  fields={fields}
                  onSubmit={handleSubmit}
                  initialData={item}
                  submitText="Save Changes"
                  isEdit={true}
                />
                <button
                  onClick={handleCancelEdit}
                  className="mt-2 bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Show item display
              <div>
                {Object.entries(item)
                  .filter(([key]) => key !== "id")
                  .map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:{" "}
                      </span>
                      <span>{value}</span>
                    </div>
                  ))}
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
