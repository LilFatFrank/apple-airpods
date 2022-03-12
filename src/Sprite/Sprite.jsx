import sprite from "./icons.svg";

const Sprite = ({ width, height, id, style, className, onClick }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      id={id}
      style={{ ...style }}
      className={className || ""}
      onClick={onClick}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Sprite;
