const Button = ({
  index,
  activeIndex,
  setActiveIndex,
  classes,
  color,
  text,
  textColor,
}) => {
  console.log("Hello");
  console.log(color);
  const isClicked = index === activeIndex;

  const handleClick = () => {
    setActiveIndex(index);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? "#6148FF" : color,
    color: isClicked ? "white" : textColor,
  };
  return (
    <button className={classes} style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
