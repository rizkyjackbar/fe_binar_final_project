const Button = ({
  index,
  activeIndex,
  setActiveIndex,
  classes,
  colorAf,
  colorBf,
  text,
  textColor,
  setQueries,
  query,
}) => {
  const isClicked = index === activeIndex;

  const handleClick = () => {
    setActiveIndex(index);
    setQueries(query);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? colorAf : colorBf,
    color: isClicked ? "white" : textColor,
  };
  return (
    <button className={classes} style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
