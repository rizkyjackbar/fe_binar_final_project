const Button = ({
  index,
  activeIndex,
  setActiveIndex,
  classes,
  colorAf,
  colorBf,
  text,
  textColor,
}) => {
  const isClicked = index === activeIndex;

  const handleClick = () => {
    setActiveIndex(index);
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
