import { Navbar, CardCategory } from "../component";
import {
  hero,
  categoryPM,
  categoryUIUX,
  categoryWEB,
  categoryAND,
  categoryDS,
  categoryIOS,
} from "../assets";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
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
              <h2 className="text-2xl font-bold">KATEGORI BELAJAR</h2>
              <a href="#" className="text-xs font-extrabold text-[#6148FF]">
                Lihat Semua
              </a>
            </div>
            <div className="p-5">
              <div className="flex flex-row justify-between">
                <CardCategory
                  link={"#"}
                  img={categoryUIUX}
                  label={"UI/UX Design"}
                />
                <CardCategory
                  link={"#"}
                  img={categoryPM}
                  label={"Product Management"}
                />
                <CardCategory
                  link={"#"}
                  img={categoryWEB}
                  label={"Web Developer"}
                />
                <CardCategory
                  link={"#"}
                  img={categoryAND}
                  label={"Android Development"}
                />
                <CardCategory
                  link={"#"}
                  img={categoryIOS}
                  label={"IOS Development"}
                />
                <CardCategory
                  link={"#"}
                  img={categoryDS}
                  label={"Data Science"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
