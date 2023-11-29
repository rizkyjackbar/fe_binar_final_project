import { Navbar } from "../../component";
import { BellIcon, ArrowLeftIcon } from "@heroicons/react/solid";

const NotificationUser = () => {
  const isUnread = true;
  const isRead = false;

  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <div className="bg-[#EBF3FC] h-40 p-4 mb-8">
        <div className="mt-6 ms-52">
          <a className="text-indigo-600 font-bold flex items-center" href="/">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            <p>Kembali Ke Beranda</p>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="card bg-white shadow-md mt-12 w-2/3 h-auto border border-indigo-600 rounded-2xl">
            <h2 className="bg-indigo-600 flex items-center justify-center text-sm font-bold text-white rounded-t-2xl mb-4 h-12">
              Notifikasi
            </h2>
            <div className="isiCard p-4 flex items-center">
              <div className="bg-indigo-600 p-1 rounded-full">
                <BellIcon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-indigo-600">Promosi</h2>
                <p className="text-gray-800 font-bold">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </p>
                <p className="text-sm text-gray-500">
                  Syarat dan Ketentuan berlaku!
                </p>
              </div>
              <div className="ml-auto text-right flex items-center">
                <p className="text-sm text-gray-500">2 Maret, 12:00</p>
                <div
                  className={`ml-2 w-4 h-4 rounded-full ${
                    isUnread ? "bg-red-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
            </div>

            <div className="isiCard p-4 flex items-center">
              <div className="bg-indigo-600 p-1 rounded-full">
                <BellIcon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-indigo-600">Notifikasi</h2>
                <p className="text-gray-800 font-bold">
                  Password berhasil diubah
                </p>
                <p className="text-sm text-gray-500"></p>
              </div>
              <div className="ml-auto text-right flex items-center">
                <p className="text-sm text-gray-500">1 Maret, 10:00</p>
                <div
                  className={`ml-2 w-4 h-4 rounded-full ${
                    isRead ? "bg-red-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
            </div>

            <div className="isiCard p-4 flex items-center">
              <div className="bg-indigo-600 p-1 rounded-full">
                <BellIcon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-indigo-600">Promosi</h2>
                <p className="text-gray-800 font-bold">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </p>
                <p className="text-sm text-gray-500">
                  Syarat dan Ketentuan berlaku!
                </p>
              </div>
              <div className="ml-auto text-right flex items-center">
                <p className="text-sm text-gray-500">1 Maret, 09:00</p>
                <div
                  className={`ml-2 w-4 h-4 rounded-full ${
                    isUnread ? "bg-red-500" : "bg-green-500"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationUser;
