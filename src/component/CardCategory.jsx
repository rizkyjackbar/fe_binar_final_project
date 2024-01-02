import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardCategory = ({ link, img, label, classes }) => {
  return (
    <span className={classes}>
      <Link
        to={link}
        className="flex items-center flex-col gap-4 text-center mx-2"
      >
        <img
          src={img}
          className=" w-[100px] lg:w-[8.75rem] h-[6.25rem] rounded-3xl object-cover"
        />
        <label className=" text-[12px] md:text-[16px]">{label}</label>
      </Link>
    </span>
  );
};

export default CardCategory;
