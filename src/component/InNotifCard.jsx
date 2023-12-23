import PropTypes from "prop-types";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/solid";

const IsiCard = ({ data, createdAt }) => {
  const [isCardClicked, setCardClicked] = useState(false);

  const handleCardClick = () => {
    setCardClicked(!isCardClicked);
  };

  const { title, message, is_readed } = data;

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
          !is_readed ? "ring-2 ring-white" : ""
        }`}
      >
        <BellIcon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h2
          className={`text-indigo-600 ${
            !is_readed ? "font-bold" : "font-normal"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-gray-800 ${
            !is_readed ? "font-bold" : "font-normal"
          }`}
        >
          {message}
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
};

export default IsiCard;
