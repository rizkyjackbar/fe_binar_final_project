const CardCategory = ({ link, img, label, classes }) => {
  return (
    <span className={classes}>
      <a
        href={link}
        className="flex items-center flex-col gap-4 text-center mx-2"
      >
        <img
          src={img}
          className="w-[8.75rem] h-[6.25rem] rounded-3xl object-cover"
        />
        <label>{label}</label>
      </a>
    </span>
  );
};

export default CardCategory;
