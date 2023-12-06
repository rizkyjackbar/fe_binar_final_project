import { ArrowCircleRightIcon, XIcon } from "@heroicons/react/solid";
import CardCourse from "./CardCourse";
import { Link } from "react-router-dom";

const ModalBuy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="flex fixed z-50 justify-center items-center w-full inset-0 h-[calc(100%)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow bg-white">
          <button
            type="button"
            className="absolute top-2 end-2.5 text-gray-400 hover:bg-indigo-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <XIcon className="w-5 fill-blue-800 hover:fill-white" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h3 className="mb-1 text-black text-2xl font-bold">
              Selangkah lagi menuju
            </h3>
            <h3 className="mb-5 text-indigo-600 text-2xl font-bold">
              Kelas Premium
            </h3>
            <CardCourse />
            <Link to={"/payment"}>
              <button
                type="button"
                className="w-64 h-10 p-3 text-white border border-gray-200 text-base font-bold bg-indigo-600 rounded-3xl shadow justify-center items-center gap-2 inline-flex"
              >
                Beli Sekarang
                <ArrowCircleRightIcon className="w-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuy;
