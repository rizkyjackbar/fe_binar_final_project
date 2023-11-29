import { bx_search } from "../assets";
import { FilterCourse, Navbar } from "../component";

const MyClass = () => {
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
          <div></div>

          <FilterCourse />
        </div>
      </main>
    </>
  );
};

export default MyClass;
