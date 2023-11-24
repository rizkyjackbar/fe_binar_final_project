const CardCategory = ({ link, img, label }) => {
  return (
    <span className="max-w-max ">
      <a href={link} className=" flex items-center flex-col">
        <img src={img} />
        <label>{label}</label>
      </a>
    </span>
  );
};

export default CardCategory;
