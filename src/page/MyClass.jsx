import { useEffect, useRef, useState } from "react";
import { bx_search } from "../assets";
import {
  Button,
  CardCourse,
  FilterCourse,
  Navbar,
  ProgresBar,
} from "../component";
import { Link } from "react-router-dom";

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
      text: "In Progress",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
      query: "In Progress",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Selesai",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
      query: "Selesai ",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [queries, setQueries] = useState("");
  const [filterCheckboxesFilter, setFilterCheckboxesFilter] = useState([]);
  const [filterCheckboxesCategory, setFilterCheckboxesCategory] = useState([]);
  const [filterCheckboxesLevel, setFilterCheckboxesLevel] = useState([]);
  const [courses, setCourses] = useState([]);

  const inputField = useRef();

  const token = localStorage.getItem("accessToken");

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
        `https://befinalprojectbinar-production.up.railway.app/api/trackers/?filter=${filters}&type=${queries}&${filtersCategories}&level=${filtersLevel}&name=${encodeURIComponent(
          capitalizeFirstLetter(searchInput)
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
    token,
  ]);

  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main className="bg-[#EBF3FC] h-screen w-full">
        <div className="mx-56 pt-5">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold ">Kelas Berjalan</h2>
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
            {courses.length > 0 ? (
              <div className="pt-[1.39rem] grid grid-cols-3 gap-4">
                {courses.map((course) =>
                  activeIndex === 0 ||
                  (activeIndex === 1 && course.progress_course < 100) ? (
                    <CardCourse
                      key={course.course.id}
                      id={course.course.id}
                      img={course.course.category.image}
                      classCategory={course.course.category.category}
                      classesName={course.course.name}
                      classMentor={course.course.facilitator}
                      level={course.course.level}
                      moduls={course.course.total_chapter}
                      times={course.course.total_duration}
                    >
                      <ProgresBar progres={`${course.progress_course}%`} />
                    </CardCourse>
                  ) : activeIndex === 2 && course.progress_course === 100 ? (
                    <CardCourse
                      key={course.course.id}
                      id={course.course.id}
                      img={course.course.category.image}
                      classCategory={course.course.category.category}
                      classesName={course.course.name}
                      classMentor={course.course.facilitator}
                      level={course.course.level}
                      moduls={course.course.total_chapter}
                      times={course.course.total_duration}
                    >
                      <ProgresBar progres={`${course.progress_course}%`} />
                    </CardCourse>
                  ) : null
                )}
              </div>
            ) : (
              <div className="flex items-center text-center pt-[1.39rem]">
                <p className="grow py-36 font-bold text-xl">
                  Anda belum memulai kelas,
                  <Link to="/class" className="text-blue-900">
                    {" "}
                    mulai cari kelas!
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Class;
