import {
  Link,
  NavLink,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { bx_search, logo, fi_login } from "../assets";
import { BellIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ setSearchInput }) => {
  const location = useLocation();
  const notificationMatch = useMatch("/notification");
  const editDetailAccountMatch = useMatch("/editdetailaccount");

  const [activeLink, setActiveLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputField = useRef();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchInput(inputField.current.value);
    navigate("/class", { state: { searchInput: inputField.current.value } });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);

    const pathname = location.pathname;

    if (pathname.includes("/class")) {
      setActiveLink("class");
    } else if (pathname.includes("/myclass")) {
      setActiveLink("class");
    } else if (pathname.includes("/detailclass")) {
      setActiveLink("class");
    } else if (notificationMatch) {
      setActiveLink("notification");
    } else if (editDetailAccountMatch) {
      setActiveLink("editdetailaccount");
    } else if (pathname.includes("/changepassword")) {
      setActiveLink("editdetailaccount");
    } else if (pathname.includes("/paymenthistory")) {
      setActiveLink("editdetailaccount");
    } else {
      setActiveLink(null);
    }
  }, [location, notificationMatch, editDetailAccountMatch]);

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <nav className="h-12 sm:h-14 lg:h-20 shadow-[0_0_0_10px_0_rgba(0, 0, 0, 0.15)] flex justify-between bg-[#6148ff]">
      <div className="flex justify-center items-center">
        <Link to="/" className="ml-8 mr-2 lg:ml-[5.94rem] lg:mr-[2.18rem]">
          <img
            src={logo}
            alt="Logo"
            className="text-2xl lg:text-3xl font-semibold"
            style={{ width: "180px" }}
          />
        </Link>
        {/* Search Bar */}
        <div className="lg:w-[400px] lg:h-13 bg-white  rounded-2xl p-1 px-4 hidden md:block ml-10">
          <form
            className="flex justify-between items-center"
            onSubmit={onSubmit}
          >
            <input
              ref={inputField}
              type="text"
              placeholder="Cari Kursus terbaik...."
              className="w-full h-full text-gray-900 text-xs lg:text-sm outline-none focus:outline-none"
            />
            <div className="flex justify-center items-center">
              <button
                className="flex justify-center items-center w-9 h-9 lg:w-38 lg:h-38 bg-[#6148FF] rounded-lg lg:rounded-xl"
                type="submit"
              >
                <img
                  src={bx_search}
                  alt="Search Icon"
                  className="flex justify-center items-center"
                />
              </button>
            </div>
          </form>
        </div>
        {/* Blabla */}
      </div>
      <div className="text-white flex pr-8 lg:pr-[9.16rem]">
        {isLoggedIn ? (
          <ul className="flex justify-center items-center text-base font-bold lg:text-lg gap-1">
            <li>
              <Link
                to={"/myclass"}
                onClick={() => handleNavLinkClick("class")}
                className={`flex items-center gap-1 py-0.5 px-4 rounded-xl ${
                  activeLink === "class" ? "bg-blue-400" : ""
                }`}
                style={{
                  backgroundColor: activeLink === "class" ? "#489CFF" : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H3.01"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12H3.01"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H3.01"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {activeLink === "class" && <p>Kelas</p>}
              </Link>
            </li>
            <li>
              <Link
                to={"/notification"}
                onClick={() => handleNavLinkClick("notification")}
                className={`flex items-center gap-1 py-0.5 px-4 rounded-xl ${
                  activeLink === "notification" ? "bg-blue-400" : ""
                }`}
                style={{
                  backgroundColor:
                    activeLink === "notification" ? "#489CFF" : "",
                }}
              >
                <BellIcon className="w-6" />
                {activeLink === "notification" && <p>Notifikasi</p>}
              </Link>
            </li>
            <li>
              <Link
                to={"/editdetailaccount"}
                onClick={() => handleNavLinkClick("editdetailaccount")}
                className={`flex items-center gap-1 py-0.5 px-4 rounded-xl {activeLink === "editdetailaccount" ? "active-link" : ""}`}
                style={{
                  backgroundColor:
                    activeLink === "editdetailaccount" ? "#489CFF" : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {activeLink === "editdetailaccount" && <p>Akun</p>}
              </Link>
            </li>
          </ul>
        ) : (
          <button>
            <NavLink
              className="flex items-center text-xs lg:text-lg gap-2"
              to={"/login"}
            >
              <img src={fi_login} />
              <p>Masuk</p>
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
