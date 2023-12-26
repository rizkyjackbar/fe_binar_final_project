import {
  CogIcon,
  ShoppingCartIcon,
  PencilAltIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MenuActionProfile = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="p-4 text-right">
      <div className="md:hidden">
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
      </div>

      {isMenuOpen && (
        <ul className="md:flex md:items-center md:space-x-4">
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <PencilAltIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <Link
              to="/editdetailaccount"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Profile Saya
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <CogIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <Link
              to="/changepassword"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Ubah Password
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <ShoppingCartIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <Link
              to="/paymenthistory"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Riwayat Pembayaran
            </Link>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <LogoutIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <button
              onClick={handleLogout}
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Keluar
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuActionProfile;
