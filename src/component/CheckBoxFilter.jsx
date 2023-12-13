const CheckBoxFilter = ({ isChecked, onChange, name }) => {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span className="ms-2 text-xs font-normal text-gray-500">{name}</span>
    </label>
  );
};

export default CheckBoxFilter;
