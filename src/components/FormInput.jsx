export default function FormInput({ field, value = "", onChange }) {
  const { name, type, label, rows, options, ...otherProps } = field;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const baseClasses =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  switch (type) {
    case "textarea":
      return (
        <div className="mb-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            rows={rows || 3}
            className={baseClasses}
            {...otherProps}
          />
        </div>
      );

    case "select":
      return (
        <div className="mb-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className={baseClasses}
            {...otherProps}
          >
            <option value="">Select {label}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return (
        <div className="mb-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className={baseClasses}
            {...otherProps}
          />
        </div>
      );
  }
}
