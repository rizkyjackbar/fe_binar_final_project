import classes from "./css/navbar.module.css";
import { bx_search, logo } from "./img";

const Navbar = () => {
  return (
    <div className={classes.header}>
      <div className="brand ml-[5.94rem] mr-[2.18rem]">
        <img src={logo} />
      </div>
      <div className="w-[32.875rem] bg-white my-[1.13rem] rounded-2xl py-3 px-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Cari Kursus terbaik...."
            className="block w-full h-full  text-gray-900 "
          />
          <span className="flex items-center justify-center w-[2.375rem] h-[2.375rem] bg-[#6148FF] rounded-[0.625rem]">
            <img src={bx_search} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
