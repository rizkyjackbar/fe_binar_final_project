import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

const MenuActionProfile = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.data.name) {
      const firstName = userData.data.name.split(" ")[0];
      setUserName(firstName);
    }
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
        <Transition show={isLogoutModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsLogoutModalOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

              <div className="inline-block align-middle my-8 p-4 max-w-md text-left overflow-hidden bg-white rounded-md shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6">
                <Dialog.Title as="h3" className="text-lg font-semibold mb-4">
                  Haiii {userName}
                </Dialog.Title>
                <Dialog.Description className="mb-4">
                  Apakah Anda yakin ingin keluar?
                </Dialog.Description>
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
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default MenuActionProfile;
