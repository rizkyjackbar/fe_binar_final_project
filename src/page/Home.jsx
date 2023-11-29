import { MainNavbar, CardCategory, CardCourse, ButtonBuy } from "../component";
import { hero, PM, UIUX, WEB, AND, DS, IOS } from "../assets";

const Home = () => {
  return (
    <>
      <header>
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
              <a href="#" className="text-xs font-extrabold text-[#6148FF]">
                Lihat Semua
              </a>
            </div>
            <div className="p-5">
              <div className="flex flex-row justify-between">
                <CardCategory link={"#"} img={UIUX} label={"UI/UX Design"} />
                <CardCategory
                  link={"#"}
                  img={PM}
                  label={"Product Management"}
                />
                <CardCategory link={"#"} img={WEB} label={"Web Developer"} />
                <CardCategory
                  link={"#"}
                  img={AND}
                  label={"Android Development"}
                />
                <CardCategory link={"#"} img={IOS} label={"IOS Development"} />
                <CardCategory link={"#"} img={DS} label={"Data Science"} />
              </div>
            </div>
          </div>
        </section>

        <section id="kategori-belajar">
          <div className="mx-60 py-7 ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kursus Populer</h2>
              <a href="#" className="text-xs font-extrabold text-[#6148FF]">
                Lihat Semua
              </a>
            </div>
            <div>button</div>
            <div className="pt-[1.39rem] flex flex-row justify-between">
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
        </section>
      </main>
    </>
  );
};

export default Home;
