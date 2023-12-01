import React, { useState } from "react";

const Checkbox = ({ value, isChecked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label className="ms-2 text-xs font-normal text-gray-500">{value}</label>
    </div>
  );
};

const ButtonClear = ({ onClick }) => {
  return (
    <div className="flex justify-center text-rose-600 font-bold text-xs pt-3">
      <button type="button" className="w-full" onClick={onClick}>
        Hapus Filter
      </button>
    </div>
  );
};

const FilterCourse = () => {
  const [checkboxes, setCheckboxes] = useState([
    { value: "Paling Baru", isChecked: false },
    { value: "Paling Populer", isChecked: false },
    { value: "Promo", isChecked: false },
    { value: "UI/UX Design", isChecked: false, h1Content: "Kategori" },
    { value: "Web Development", isChecked: false },
    { value: "Android Development", isChecked: false },
    { value: "Data Science", isChecked: false },
    { value: "Business Intelligence", isChecked: false },
    { value: "Semua Level", isChecked: false, h1Content: "Level Kesulitan" },
    { value: "BeginerLevel", isChecked: false },
    { value: "Intermediate Level", isChecked: false },
    { value: "Advanced Level", isChecked: false },
  ]);

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].isChecked = !newCheckboxes[index].isChecked;
    setCheckboxes(newCheckboxes);
  };

  const handleHapusCheckboxes = () => {
    const newCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      isChecked: false,
    }));
    setCheckboxes(newCheckboxes);
  };

  return (
    <form className="bg-white max-w-max rounded-2xl px-6 py-3">
      <h2 className="mb-5 font-bold">Filter</h2>
      {checkboxes.map((checkbox, index) => (
        <React.Fragment key={index}>
          {(index - 3) % 5 === 0 && index > 1 && (
            <h1 className="mt-4 font-bold text-base">{checkbox.h1Content}</h1>
          )}
          <Checkbox
            key={index}
            value={checkbox.value}
            isChecked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(index)}
          />
        </React.Fragment>
      ))}
      <ButtonClear onClick={handleHapusCheckboxes} />
    </form>
  );
};

export default FilterCourse;
