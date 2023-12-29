import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/solid";

const IsiCard = ({ data, createdAt, onClick, isRead }) => {
  const [isCardClicked, setCardClicked] = useState(false);

  useEffect(() => {
    setCardClicked(isRead);
  }, [isRead]);

  const handleCardClick = () => {
    if (!isRead) {
      setCardClicked(true);
      onClick(); // Panggil fungsi onClick dari parent component
    }
    // Jika notifikasi sudah dibaca, tidak ada aksi yang diambil saat diklik
  };

  return (
    <a
      className={`isiCard p-4 flex items-center ${
        isCardClicked ? "bg-gray-100" : ""
      }`}
      href="#"
      onClick={handleCardClick}
    >
      <div
        className={`bg-indigo-600 p-1 rounded-full ${
          isRead ? "bg-green-500" : "ring-2 ring-white"
        }`}
      >
        <BellIcon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h2
          className={`text-indigo-600 ${
            isRead ? "font-normal" : "font-bold"
          }`}
        >
          {data.title}
        </h2>
        <p
          className={`text-gray-800 ${
            isRead ? "font-normal" : "font-bold"
          }`}
        >
          {data.message}
        </p>
        <p className="text-sm text-gray-500"></p>
      </div>
      <div className="ml-auto text-right flex items-center">
        <p className="text-sm text-gray-500">{createdAt}</p>
        <div
          className={`ml-2 w-4 h-4 rounded-full ${
            isCardClicked ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>
    </a>
  );
};

IsiCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    is_readed: PropTypes.bool.isRequired,
    date_notif: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isRead: PropTypes.bool.isRequired,
};

export default IsiCard;
