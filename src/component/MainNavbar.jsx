import { bx_search, logo, fi_login } from "../assets";

const MainNavbar = () => {
  return (
    <nav className="h-12 sm:h-14 lg:h-20 shadow-[0_0_0_10px_0_rgba(0, 0, 0, 0.15)] flex justify-between bg-[#6148ff]">
      <div className="flex justify-center items-center">
        <a href="/" className="ml-8 mr-2 mt-2 lg:ml-[5.94rem] lg:mr-[2.18rem]">
          <img src={logo} className="flex mt-2 w-20 lg:w-28"/>
        </a>
        <div className="w-52 h-8 lg:w-[32.875rem] lg:h-12  bg-white my-[1.13rem] rounded-2xl p-1 px-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Cari Kursus terbaik...."
              className="w-full h-full text-gray-900 text-xs lg:text-sm outline-none focus:outline-none"
            />
            <button className="flex items-center justify-center w-6 h-6 lg:w-[2.375rem] lg:h-[2.375rem] bg-[#6148FF] rounded-[0.625rem]">
              <img src={bx_search} alt="Search Icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-white flex pr-[9.16rem]">
        <button>
          <a className="flex items-center gap-2" href="/login">
            <img src={fi_login} />
            <p>Masuk</p>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
