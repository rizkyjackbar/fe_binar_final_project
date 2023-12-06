const CardCategory = ({ link, img, label }) => {
  return (
    <span className="px-2">
      <a href={link} className=" flex items-center flex-col gap-4">
        <img src={img} className="w-40 h-[6.25rem] rounded-3xl" />
        <label>{label}</label>
      </a>
    </span>
  );
};

export default CardCategory;
