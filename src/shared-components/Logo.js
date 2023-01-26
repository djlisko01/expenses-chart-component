import Circle from "./Cirlce";

const Logo = () => {
  return (
    <div className="logo vertical-align">
      <Circle right={"0"} border={"2px solid black"} />
      <Circle
        right={"15px"}
        bgColor={"transparent"}
        border={"2px solid white"}
      />
    </div>
  );
};

export default Logo;
