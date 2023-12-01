import { Navbar } from "../../component";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ComPaymentHistory from "../../component/PaymentHistory";
import MenuAction from "../../component/MenuActionProfile";

const PayementHistory = () => {
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
          <div className="card bg-white shadow-md mt-12 w-2/3 h-auto border border-indigo-600 rounded-2xl mb-12">
            <h2 className="bg-indigo-600 flex items-center justify-center text-sm font-bold text-white rounded-t-2xl h-12">
              Akun
            </h2>
            <div className="grid grid-cols-2">
              <MenuAction />
              <ComPaymentHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayementHistory;
