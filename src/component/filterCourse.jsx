import { useState } from "react";
import CheckBoxFilter from "./CheckBoxFilter";

const FilterCourse = ({
  setFilterCheckboxesFilter,
  setFilterCheckboxesCategory,
  setFilterCheckboxesLevel,
}) => {
  const [checkboxesFilter, setCheckboxesFilter] = useState([
    { value: "Paling Baru", name: "Paling Baru", isChecked: false },
    { value: "Promo", name: "Promo", isChecked: false },
  ]);

  const [checkboxesCategory, setCheckboxesCategory] = useState([
    { value: "UI/UX Design", name: "UI/UX Design", isChecked: false },
    { value: "Web Development", name: "Web Development", isChecked: false },
    {
      value: "Android Development",
      name: "Android Development",
      isChecked: false,
    },
    { value: "IOS Development", name: "IOS Development", isChecked: false },
    { value: "Data Science", name: "Data Science", isChecked: false },
    { value: "Product Manager", name: "Product Manager", isChecked: false },
  ]);

  const [checkboxLevel, setcheckboxLevel] = useState([
    { value: "", name: "Semua Level", isChecked: false },
    { value: "Beginner Level", name: "Beginner Level", isChecked: false },
    {
      value: "Intermediate Level",
      name: "Intermediate Level",
      isChecked: false,
    },
    { value: "Advanced Level", name: "Advanced Level", isChecked: false },
  ]);

  const handleCheckboxFilterChange = (index) => {
    const newCheckboxesFilter = [...checkboxesFilter];

    if (index >= 0 && index <= 1) {
      newCheckboxesFilter.forEach((checkbox, i) => {
        if (i === index) {
          newCheckboxesFilter[index].isChecked =
            !newCheckboxesFilter[index].isChecked;
        } else if (i >= 0 && i <= 1) {
          checkbox.isChecked = false;
        }
      });
    }

    setCheckboxesFilter(newCheckboxesFilter);

    setFilterCheckboxesFilter(
      newCheckboxesFilter
        .filter((checkbox) => checkbox.isChecked)
        .map((checkbox) => checkbox.value)
    );
  };

  const handleCheckboxCategoryChange = (index) => {
    const newCheckboxesCategory = [...checkboxesCategory];
    newCheckboxesCategory[index].isChecked =
      !newCheckboxesCategory[index].isChecked;
    setCheckboxesCategory(newCheckboxesCategory);

    setFilterCheckboxesCategory(
      newCheckboxesCategory
        .filter((checkbox) => checkbox.isChecked)
        .map((checkbox) => checkbox.value)
    );
  };

  const handleCheckboxLevelChange = (index) => {
    const newCheckboxesLevel = [...checkboxLevel];

    if (index >= 0 && index <= 3) {
      newCheckboxesLevel.forEach((checkbox, i) => {
        if (i === index) {
          newCheckboxesLevel[index].isChecked =
            !newCheckboxesLevel[index].isChecked;
        } else if (i >= 0 && i <= 3) {
          checkbox.isChecked = false;
        }
      });
    }

    setcheckboxLevel(newCheckboxesLevel);
    setFilterCheckboxesLevel(
      newCheckboxesLevel
        .filter((checkbox) => checkbox.isChecked)
        .map((checkbox) => checkbox.value)
    );
  };

  const handleHapusCheckboxes = () => {
    const newCheckboxesCategory = checkboxesCategory.map((checkbox) => ({
      ...checkbox,
      isChecked: false,
    }));
    setCheckboxesCategory(newCheckboxesCategory);
    setFilterCheckboxesFilter([]);
    const newCheckboxesFilter = checkboxesFilter.map((checkbox) => ({
      ...checkbox,
      isChecked: false,
    }));
    setCheckboxesFilter(newCheckboxesFilter);
    setFilterCheckboxesCategory([]);
    const newCheckboxesLevel = checkboxLevel.map((checkbox) => ({
      ...checkbox,
      isChecked: false,
    }));
    setcheckboxLevel(newCheckboxesLevel);
    setFilterCheckboxesLevel([]);
  };

  return (
    <form className="bg-white max-w-max rounded-2xl px-6 py-3">
      <h2 className="mb-5 font-bold">Filter</h2>
      {checkboxesFilter.map((checkbox, index) => (
        <CheckBoxFilter
          key={index}
          value={checkbox.value}
          name={checkbox.name}
          isChecked={checkbox.isChecked}
          onChange={() => handleCheckboxFilterChange(index)}
        />
      ))}
      <h1 className="mt-4 font-bold text-base">Kategori</h1>
      {checkboxesCategory.map((checkbox, index) => (
        <CheckBoxFilter
          key={index}
          value={checkbox.value}
          name={checkbox.name}
          isChecked={checkbox.isChecked}
          onChange={() => handleCheckboxCategoryChange(index)}
        />
      ))}
      <h1 className="mt-4 font-bold text-base">Level Kesulitan</h1>
      {checkboxLevel.map((checkbox, index) => (
        <CheckBoxFilter
          key={index}
          value={checkbox.value}
          name={checkbox.name}
          isChecked={checkbox.isChecked}
          onChange={() => handleCheckboxLevelChange(index)}
        />
      ))}
      <div className="flex justify-center text-rose-600 font-bold text-xs pt-3">
        <button
          type="button"
          className="w-full"
          onClick={handleHapusCheckboxes}
        >
          Hapus Filter
        </button>
      </div>
    </form>
  );
};

export default FilterCourse;
