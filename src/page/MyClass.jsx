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
      classes: "rounded-2xl font-semibold px-5 py-2 text-[14px] lg:text-[16px]",
      query: "",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "In Progress",
      classes:
        "rounded-2xl font-semibold px-5 py-2 grow text-[14px] lg:text-[16px]",
      query: "In Progress",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Selesai",
      classes:
        "rounded-2xl font-semibold px-5 py-2 grow text-[14px] lg:text-[16px]",
      query: "Selesai ",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [queries, setQueries] = useState("");
  const [filterCheckboxesFilter, setFilterCheckboxesFilter] = useState([]);
  const [filterCheckboxesCategory, setFilterCheckboxesCategory] = useState([]);
  const [filterCheckboxesLevel, setFilterCheckboxesLevel] = useState([]);
  const [courses, setCourses] = useState([]);
  const [seacrhActive, setSeacrhActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

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
      console.log(data);
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
      <header className="sticky top-0 z-20">
        <Navbar />
      </header>

      <main
        className="bg-[#EBF3FC] min-h-screen w-full"
        style={{ paddingBottom: "3rem" }}
      >
        <div className="mx-6 lg:mx-56 pt-5">
          <div className="flex flex-row items-center justify-between">
            <h2
              className={`text-[16px] ${
                seacrhActive ? "mr-0" : "mr-14"
              } lg:mr-0 lg:text-2xl font-bold `}
            >
              Kelas Berjalan
            </h2>
            <div className=" relative">
              <button
                onClick={() => setFilterActive(!filterActive)}
                className={`w-[50px] bg-[#6148FF] rounded-[0.625rem] py-3 px-2 lg:px-6 text-white ${
                  seacrhActive ? "hidden" : "block"
                } lg:hidden`}
              >
                Filter
              </button>
              <div className={`absolute ${filterActive ? "block" : "hidden"}`}>
                <div className=" -ml-20 mt-5">
                  <FilterCourse
                    setFilterCheckboxesFilter={setFilterCheckboxesFilter}
                    setFilterCheckboxesCategory={setFilterCheckboxesCategory}
                    setFilterCheckboxesLevel={setFilterCheckboxesLevel}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                seacrhActive ? "w-[160px]" : ""
              } lg:w-[12.5rem] bg-white my-[1.13rem] rounded-2xl py-1 px-2 lg:px-3 border border-indigo-600`}
            >
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
                  className={`w-full h-full text-gray-900 outline-none lg:block ${
                    seacrhActive ? "block" : "hidden"
                  }`}
                />
                <button
                  onClick={() => setSeacrhActive(!seacrhActive)}
                  type="submit"
                  className="flex items-center justify-center  w-[34px] h-[28px] bg-[#6148FF] rounded-xl"
                >
                  <img src={bx_search} className="w-[20px]" />
                </button>
              </form>
            </div>
          </div>

          <aside className="float-left pr-12 hidden lg:block">
            <FilterCourse
              setFilterCheckboxesFilter={setFilterCheckboxesFilter}
              setFilterCheckboxesCategory={setFilterCheckboxesCategory}
              setFilterCheckboxesLevel={setFilterCheckboxesLevel}
            />
          </aside>

          <div>
            <div className="button-fillter-progress flex gap-3">
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
              <div className="pt-[1.39rem] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) =>
                    activeIndex === 1
                      ? course.progress_course < 100
                      : activeIndex === 2
                      ? course.progress_course === 100
                      : true
                  )
                  .sort((a, b) => {
                    if (activeIndex === 1) {
                      return a.progress_course - b.progress_course;
                    } else if (activeIndex === 2) {
                      return b.progress_course - a.progress_course;
                    } else {
                      return 0;
                    }
                  })
                  .map((course) => (
                    <div key={course.course.id} className="mb-1">
                      {activeIndex === 0 ||
                      (activeIndex === 1 && course.progress_course < 100) ||
                      (activeIndex === 2 && course.progress_course === 100) ? (
                        <div>
                          <CardCourse
                            id={course.course.id}
                            img={course.course.category.image}
                            classCategory={course.course.category.category}
                            classesName={course.course.name}
                            classMentor={course.course.facilitator}
                            level={course.course.level}
                            moduls={course.course.total_chapter}
                            times={course.course.total_duration}
                          >
                            <ProgresBar
                              progres={`${course.progress_course}${
                                activeIndex === 2 ? "%" : ""
                              }`}
                            />
                          </CardCourse>
                        </div>
                      ) : null}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex items-center text-center pt-[1.39rem]">
                <p className="grow py-36 font-bold text-xl">
                  {activeIndex === 1 ? (
                    "Tidak ada course berlangsung"
                  ) : activeIndex === 2 ? (
                    "Masih belum ada course yang selesai"
                  ) : searchInput ? (
                    "Sepertinya Anda tidak mengambil course tersebut."
                  ) : (
                    <>
                      Anda belum memulai kelas.{" "}
                      <Link to="/class" className="text-blue-900">
                        Cari kelas dulu yuk!
                      </Link>
                    </>
                  )}
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
