import {
  MainNavbar,
  CardCategory,
  CardCourse,
  ButtonBuy,
  Button,
} from "../component";
import { hero, PM, UIUX, WEB, AND, DS, IOS } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [queries, setQueries] = useState("");

  const buttonData = [
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "All",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "Data Science",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "Data Science",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "Android Development",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "Android",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "Web Development",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "Web Development",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "IOS Development",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "IOS",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "Business Intelligence",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "Product Manager",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#E8F1FF",
      textColor: "black",
      text: "UI/UX Design",
      classes: "rounded-2xl px-5 mx-1 py-1",
      query: "UI/UX",
    },
  ];

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://befinalprojectbinar-production.up.railway.app/api/courses?category=${queries}`
      );
      const { data } = await response.json();
      setCourses(data);
    };
    fetchData();
  }, [queries]);

  return (
    <>
      <header className="sticky top-0 z-10">
        <MainNavbar />
      </header>
      <main>
        <section id="Hero">
          <div className=" bg-[#6148ff] grid grid-flow-col auto-cols-max gap-40">
            <div className="relative">
              <img src={hero} />
              <div className="absolute bg-gradient-to-l from-[#6148ff] h-full w-full top-0"></div>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <div className="text-white font-bold text-2xl ">
                <h1>Belajar</h1>
                <h1>dari Praktisi Terbaik!</h1>
              </div>
              <button className=" bg-[#fff] rounded-2xl">
                <p className="text-base font-bold text-[#6148FF] my-1.5">
                  IKUTI KELAS
                </p>
              </button>
            </div>
          </div>
        </section>

        <section id="kategori-belajar" className="bg-[#EBF3FC]">
          <div className="mx-60 pt-7">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kategori Belajar</h2>
              <Link
                to="/class"
                className="text-xs font-extrabold text-[#6148FF]"
              >
                Lihat Semua
              </Link>
            </div>
            <div></div>
            <div className="p-5">
              <div className="flex flex-row justify-between">
                <CardCategory link={"#"} img={UIUX} label={"UI/UX Design"} />
                <CardCategory
                  link={"#"}
                  img={PM}
                  label={"Product Management"}
                  className="px-10"
                />
                <CardCategory
                  link={"#"}
                  img={WEB}
                  label={"Web Developer"}
                  className="px-10"
                />
                <CardCategory
                  link={"#"}
                  img={AND}
                  label={"Android Development"}
                  className="px-10"
                />
                <CardCategory
                  link={"#"}
                  img={IOS}
                  label={"IOS Development"}
                  className="px-10"
                />
                <CardCategory
                  link={"#"}
                  img={DS}
                  label={"Data Science"}
                  className="px-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="kategori-belajar">
          <div className="mx-60 py-7 ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kursus Populer</h2>
              <Link
                to="/class"
                className="text-xs font-extrabold text-[#6148FF]"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="flex mt-3 px-6 justify-between text-sm font-bold">
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
            <div className="pt-7 grid grid-cols-3 gap-4 ">
              {courses.slice(0, 3).map((course) => (
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
                  <ButtonBuy price={course.price} />
                </CardCourse>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
