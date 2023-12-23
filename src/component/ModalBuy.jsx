import { ArrowCircleRightIcon, XIcon } from "@heroicons/react/solid";
import CardCourse from "./CardCourse";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ModalBuy = ({
  isOpen,
  onClose,
  id,
  img,
  category,
  name,
  facilitator,
  level,
  modul,
  duration,
}) => {
  if (!isOpen) return null;

  const token = localStorage.getItem("accessToken");

  const handleBuyNowClick = async () => {
    if (token) {
      try {
        console.log(id);
        const response = await fetch(
          "https://befinalprojectbinar-production.up.railway.app/api/orders",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              course_id: id,
            }),
          }
        );

        if (response.ok) {
          console.log("Create order successful!");
          console.log(response);
        } else {
          console.error("Create order failed");
          console.log(response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("User is not logged in. Redirect to login page.");
    }
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="bg-black/90 flex fixed z-50 justify-center items-center w-full inset-0 h-[calc(100%)] max-h-full "
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-3xl bg-white">
          <button
            type="button"
            className="absolute top-2 end-2.5 text-gray-400 hover:bg-indigo-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <XIcon className="w-5 fill-blue-800 hover:fill-white" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 flex flex-col justify-items-center items-center">
            <h3 className="mb-1 text-black text-2xl font-bold  text-center">
              Selangkah lagi menuju
            </h3>
            <h3 className="mb-5 text-indigo-600 text-2xl font-bold  text-center">
              Kelas Premium
            </h3>
            <div className="w-full border-2 rounded-3xl border-indigo-400">
              <CardCourse
                id={id}
                img={img}
                classCategory={category}
                classesName={name}
                classMentor={facilitator}
                level={level}
                moduls={modul}
                times={duration}
              />
            </div>
            <Link to={token ? "/payment" : "/login"} state={{ id: id }}>
              <button
                type="button"
                onClick={handleBuyNowClick}
                className="w-64 h-10 p-3 mt-4 text-white border border-gray-200 text-base font-bold bg-indigo-600 rounded-3xl shadow justify-center items-center gap-2 inline-flex"
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
