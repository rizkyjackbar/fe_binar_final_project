// MenuActionProfile.js

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const MenuActionProfile = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
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

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-96">
            <p className="text-lg font-semibold mb-4">Konfirmasi Logout</p>
            <p className="mb-4">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Batal
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuActionProfile;
