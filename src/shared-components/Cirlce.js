const Circle = ({ right, bgColor, border }) => {
  return (
    <div
      className="circle"
      style={{ right: right, backgroundColor: bgColor, border }}
    ></div>
  );
};

export default Circle;
