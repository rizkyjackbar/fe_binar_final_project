import { useState } from "react";
import { UIUX, bx_search } from "../assets";
import {
  Button,
  CardCourse,
  FilterCourse,
  Navbar,
  ProgresBar,
} from "../component";
import { BadgeCheckIcon } from "@heroicons/react/outline";

const MyClass = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonData = [
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "All",
      classes: "rounded-2xl px-5 font-semibold py-1 ",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "In Progres",
      classes: "rounded-2xl px-5 font-semibold py-1 grow",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Selesai",
      classes: "rounded-2xl px-5 font-semibold py-1 grow",
    },
  ];

  const data = {
    progres: "20%",
  };

  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main className="bg-[#EBF3FC] h-screen w-screen">
        <div className="mx-56 pt-5">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold ">Kelas Berjalan</h2>
            <div className="w-[12.5rem] bg-white my-[1.13rem] rounded-2xl py-3 px-6">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Cari kelas..."
                  className="w-full h-full text-gray-900 "
                />
                <button className="flex items-center justify-center w-[1.5rem] h-[1.5rem] bg-[#6148FF] rounded-[0.625rem]">
                  <img src={bx_search} className="w-[0.94738rem]" />
                </button>
              </form>
            </div>
          </div>

          <aside className="float-left pr-12">
            <FilterCourse />
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
                />
              ))}
            </div>
            <div className="pt-[1.39rem] flex justify-between">
              <CardCourse
                img={UIUX}
                classCategory={"UI/UX"}
                classesName={"Belajar Web Designer dengan Figma"}
                rating={4.5}
                classMentor={"Angela Doe"}
                level={"Intermediate Level"}
                moduls={10}
                times={120}
              >
                <div className="flex pt-1 w-2/4">
                  <BadgeCheckIcon className="w-5 stroke-green-400" />
                  <ProgresBar progres={data.progres} />
                </div>
              </CardCourse>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyClass;
