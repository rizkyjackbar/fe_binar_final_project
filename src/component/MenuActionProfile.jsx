import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const MenuActionProfile = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    clearSessionData();
    navigate("/login");
  };

  const clearSessionData = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userPhoto");
    localStorage.removeItem("accessToken");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`p-4 ${isMobile ? "text-right" : ""}`}>
      {isMobile ? (
        <button
          onClick={toggleMenu}
          className="text-indigo-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      ) : (
        <ul>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <Link
              to="/editdetailaccount"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Profile Saya
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <Link
              to="/changepassword"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Ubah Password
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <Link
              to="/paymenthistory"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Riwayat Pembayaran
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <button
              onClick={handleLogout}
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Keluar
            </button>
          </li>
        </ul>
      )}

      {isMobile && isMenuOpen && (
        <div className="md:hidden">
          <ul className="md:flex md:items-center md:space-x-4">
            <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
              <Link
                to="/editdetailaccount"
                className="text-black hover:text-indigo-600 font-medium transition-all"
              >
                Profile Saya
              </Link>
            </li>
            <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
              <Link
                to="/changepassword"
                className="text-black hover:text-indigo-600 font-medium transition-all"
              >
                Ubah Password
              </Link>
            </li>
            <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
              <Link
                to="/paymenthistory"
                className="text-black hover:text-indigo-600 font-medium transition-all"
              >
                Riwayat Pembayaran
              </Link>
            </li>
            <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
              <button
                onClick={handleLogout}
                className="text-black hover:text-indigo-600 font-medium transition-all"
              >
                Keluar
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuActionProfile;
