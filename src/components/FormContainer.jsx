import DynamicForm from "./DynamicForm";

export default function FormContainer({
  title,
  fields,
  items,
  onAdd,
  onEdit,
  onRemove,
}) {
  const handleSubmit = (data, isEdit) => {
    if (isEdit) {
      onEdit(data);
    } else {
      onAdd(data);
    }
  };

  return (
    <div className="space-y-6">
      <DynamicForm
        title={`Add ${title}`}
        fields={fields}
        onSubmit={handleSubmit}
        submitText={`Add ${title}`}
      />

      {/* Display existing items */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{title} List</h3>
        {items.map((item) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
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
                onClick={() => onRemove(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                Remove
              </button>
              {/* todo edit functionality */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
