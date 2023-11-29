
import { Navbar } from "../../component";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import IsiCard from "../../component/InNotifCard";

const NotificationUser = () => {
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
            <h2 className="bg-indigo-600 flex items-center justify-center text-sm font-bold text-white rounded-t-2xl h-12">
              Notifikasi
            </h2>

            <IsiCard
              title="Promosi"
              content="Dapatkan Potongan 50% selama Bulan Maret!"
              date="2 Maret, 12:00"
            />

            <IsiCard
              title="Notifikasi"
              content="Password berhasil diubah"
              date="1 Maret, 10:00"
            />

            <IsiCard
              title="Promosi"
              content="Dapatkan Potongan 50% selama Bulan Maret!"
              date="1 Maret, 09:00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationUser;
