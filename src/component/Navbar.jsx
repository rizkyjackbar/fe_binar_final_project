import { bx_search, logo, fi_login } from "../assets";

const Navbar = () => {
  return (
    <nav className="h-[6.25rem] shadow-[0_0_0_10px_0_rgba(0, 0, 0, 0.15)] flex justify-between bg-[#6148ff]">
      <div className="flex">
        <div className="ml-[5.94rem] mr-[2.18rem]">
          <img src={logo} />
        </div>
        <div className="w-[32.875rem] bg-white my-[1.13rem] rounded-2xl py-3 px-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari Kursus terbaik...."
              className="w-full h-full text-gray-900 "
            />
            <button className="flex items-center justify-center w-[2.375rem] h-[2.375rem] bg-[#6148FF] rounded-[0.625rem]">
              <img src={bx_search} />
            </button>
          </div>
        </div>
      </div>
      <div className="text-white flex pr-[9.16rem]">
        <button className="flex items-center gap-2">
          <img src={fi_login} />
          <p>Masuk</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
