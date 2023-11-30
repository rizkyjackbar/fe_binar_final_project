import {
    CogIcon,
    ShoppingCartIcon,
    PencilAltIcon,
    LogoutIcon,
  } from "@heroicons/react/solid";
  
  const MenuActionProfile = () => {
    return (
      <div className="p-4">
        <ul>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <PencilAltIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <a
              href="/editdetailaccount"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Profile Saya
            </a>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <CogIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <a
              href="/changepassword"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Ubah Password
            </a>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <ShoppingCartIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <a
              href="/paymenthistory"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Riwayat Pembayaran
            </a>
          </li>
          <li className="flex items-center mb-3.5 pb-3.5 border-b border-gray-300">
            <LogoutIcon className="w-6 h-6 mr-2 text-indigo-600" />
            <a
              href="/logout"
              className="text-black hover:text-indigo-600 font-medium transition-all"
            >
              Keluar
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MenuActionProfile;
  