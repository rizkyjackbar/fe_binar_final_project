import {
  ClockIcon,
  ShieldExclamationIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const CardCourse = ({
  id,
  img,
  classCategory,
  classesName,
  classMentor,
  level,
  moduls,
  times,
  children,
}) => {
  return (
    <Link
      className="bg-white cardCourse w-[20.1875rem] rounded-2xl shadow-md"
      to={"/detailclass"}
      state={{ id: id }}
    >
      <img src={img} className="rounded-t-2xl w-full h-20 object-cover" />
      <div className="cardBody px-2.5 py-2 flex flex-col gap-0.5">
        <p className="text-[0.625rem] font-bold text-[#6148FF]">
          {classCategory}
        </p>
        <p className="text-[0.625rem] font-bold">{classesName}</p>
        <p className="text-[0.5rem] font-normal">by {classMentor}</p>
        <div className="text-[0.5rem]/[0.875rem] font-semibold flex flex-row justify-between pt-[0.19rem]">
          <div className="flex items-center">
            <ShieldExclamationIcon className="stroke-green-500 w-4" />
            <p className="text-[#6148FF]">{level}</p>
          </div>
          <div className="flex items-center">
            <BookOpenIcon className="stroke-green-500 w-4" />
            <p className="">{moduls} Modul</p>
          </div>
          <div className="flex items-center">
            <ClockIcon className="stroke-green-500 w-4" />
            <p className="">{times} Menit</p>
          </div>
        </div>
        {children}
      </div>
    </Link>
  );
};

export default CardCourse;
