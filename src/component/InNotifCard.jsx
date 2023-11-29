import { useState } from 'react';
import { BellIcon } from "@heroicons/react/solid";

const IsiCard = ({ title, content, date, isUnread, isRead }) => {
  const [isCardClicked, setCardClicked] = useState(false);

  const handleCardClick = () => {
    setCardClicked(!isCardClicked);
  };

  return (
    <a
      className={`isiCard p-4 flex items-center ${isCardClicked ? 'bg-gray-100' : ''}`}
      href="#"
      onClick={handleCardClick}
    >
      <div className="bg-indigo-600 p-1 rounded-full">
        <BellIcon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h2 className="text-indigo-600">{title}</h2>
        <p className="text-gray-800 font-bold">{content}</p>
        <p className="text-sm text-gray-500"></p>
      </div>
      <div className="ml-auto text-right flex items-center">
        <p className="text-sm text-gray-500">{date}</p>
        <div
          className={`ml-2 w-4 h-4 rounded-full ${isCardClicked ? 'bg-green-500' : 'bg-red-500'}`}
        ></div>
      </div>
    </a>
  );
};

export default IsiCard;
