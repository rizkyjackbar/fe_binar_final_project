import {
  ClockIcon,
  ShieldExclamationIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const CardCourse = ({
  img,
  classCategory,
  classesName,
  rating,
  classMentor,
  level,
  moduls,
  times,
  children,
}) => {
  return (
    <a className="cardCourse w-[20.1875rem] rounded-2xl shadow-md" href="#">
      <img src={img} className="rounded-t-2xl w-full h-20 object-none" />
      <div className="cardBody px-2.5 py-2 flex flex-col gap-0.5">
        <div className="flex justify-between text-[0.625rem]">
          <p className="font-bold text-[#6148FF]">{classCategory}</p>
          <div className="flex flex-row items-center">
            <StarIcon className="w-3.5 h-3.5 fill-[#F9CC00]" />
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
        <p className="text-[0.625rem] font-bold">{classesName}</p>
        <p className="text-[0.5rem] font-normal">by {classMentor}</p>
        <div className="text-[0.5rem]/[0.875rem] font-semibold flex flex-row justify-between pt-[0.19rem]">
          <div className="flex items-center">
            <ShieldExclamationIcon className="stroke-green-500 w-3.5 h-3.5" />
            <p className="text-[#6148FF]">{level}</p>
          </div>
          <div className="flex items-center">
            <BookOpenIcon className="stroke-green-500 w-3.5 h-3.5" />
            <p className="">{moduls} Modul</p>
          </div>
          <div className="flex items-center">
            <ClockIcon className="stroke-green-500 w-3.5 h-3.5" />
            <p className="">{times} Menit</p>
          </div>
        </div>
        {children}
      </div>
    </a>
  );
};

export default CardCourse;