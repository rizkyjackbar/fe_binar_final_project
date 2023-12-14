import { useEffect, useRef, useState } from "react";
import { bx_search } from "../assets";
import {
  Button,
  ButtonBuy,
  ButtonFree,
  ButtonPremium,
  CardCourse,
  FilterCourse,
  Navbar,
} from "../component";

const Class = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonData = [
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "All",
      classes: "rounded-2xl font-semibold px-5 py-1 ",
      query: "",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Kelas Premium",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
      query: "Premium",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Kelas Gratis",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
      query: "Free",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [queries, setQueries] = useState("");
  const [filterCheckboxesFilter, setFilterCheckboxesFilter] = useState([]);
  const [filterCheckboxesCategory, setFilterCheckboxesCategory] = useState([]);
  const [filterCheckboxesLevel, setFilterCheckboxesLevel] = useState([]);
  const [courses, setCourses] = useState([]);

  const inputField = useRef();

  const capitalizeFirstLetter = (str) => {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  };

  useEffect(() => {
    const fetchData = async () => {
      const filtersCategories = filterCheckboxesCategory
        .map((filter) => `category=${encodeURIComponent(filter)}`)
        .join(encodeURIComponent("&"));

      const filters = filterCheckboxesFilter.map((filter) =>
        encodeURIComponent(filter)
      );

      const filtersLevel = filterCheckboxesLevel.map((filter) =>
        encodeURIComponent(filter)
      );

      const response = await fetch(
        `https://befinalprojectbinar-production.up.railway.app/api/courses?filter=${filters}&type=${queries}&${filtersCategories}&level=${filtersLevel}&name=${encodeURIComponent(
          capitalizeFirstLetter(searchInput)
        )}`
      );
      const { data } = await response.json();
      setCourses(data);
    };
    fetchData();
  }, [
    searchInput,
    queries,
    filterCheckboxesFilter,
    filterCheckboxesCategory,
    filterCheckboxesLevel,
  ]);

  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main className="bg-[#EBF3FC] h-screen w-full">
        <div className="mx-56 pt-5">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold ">Topik Kelas</h2>
            <div className="w-[12.5rem] bg-white my-[1.13rem] rounded-2xl py-3 px-6 border border-indigo-600">
              <form
                className="flex items-center"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSearchInput(inputField.current.value);
                }}
              >
                <input
                  ref={inputField}
                  type="text"
                  placeholder="Cari kelas..."
                  className="w-full h-full text-gray-900 outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-[1.5rem] h-[1.5rem] bg-[#6148FF] rounded-[0.625rem]"
                >
                  <img src={bx_search} className="w-[0.94738rem]" />
                </button>
              </form>
            </div>
          </div>

          <aside className="float-left pr-12">
            <FilterCourse
              setFilterCheckboxesFilter={setFilterCheckboxesFilter}
              setFilterCheckboxesCategory={setFilterCheckboxesCategory}
              setFilterCheckboxesLevel={setFilterCheckboxesLevel}
            />
          </aside>

          <div>
            <div className="button-fillter-progress flex gap-7">
              {buttonData.map((button, index) => (
                <Button
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  {...button}
                  setQueries={() => setQueries(button.query)}
                />
              ))}
            </div>
            <div className="pt-[1.39rem] grid grid-cols-3 gap-4">
              {courses.map((course) => (
                <CardCourse
                  key={course.id}
                  id={course.id}
                  img={course.category.image}
                  classCategory={course.category.category}
                  classesName={course.name}
                  classMentor={course.facilitator}
                  level={course.level}
                  moduls={course.total_chapter}
                  times={course.total_duration}
                >
                  {activeIndex === 0 ? (
                    <ButtonBuy price={course.price} />
                  ) : null}
                  {activeIndex === 1 ? <ButtonPremium /> : null}
                  {activeIndex === 2 ? <ButtonFree /> : null}
                </CardCourse>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Class;
