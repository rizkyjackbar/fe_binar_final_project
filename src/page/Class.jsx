import { useState } from "react";
import { UIUX, bx_search } from "../assets";
import {
  Button,
  ButtonBuy,
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
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Kelas Premium",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
    },
    {
      colorAf: "#6148FF",
      colorBf: "#FFF",
      textColor: "black",
      text: "Kelas Gratis",
      classes: "rounded-2xl font-semibold px-5 py-1 grow",
    },
  ];

  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main className="bg-[#EBF3FC] h-screen w-screen">
        <div className="mx-56 pt-5">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-bold ">Topik Kelas</h2>
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
                <ButtonBuy price={"20000"} />
              </CardCourse>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Class;
