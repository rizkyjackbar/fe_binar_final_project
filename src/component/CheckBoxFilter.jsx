const CheckBoxFilter = ({ isChecked, onChange, name }) => {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="ms-2 text-xs font-normal text-gray-500">{name}</span>
    </label>
  );
};

export default CheckBoxFilter;
