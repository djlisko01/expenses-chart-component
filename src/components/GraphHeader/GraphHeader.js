const GraphHeader = () => {
  return (
    <div className="graph-header">
      <div className="balance vertical-align">
        <h2>My Balance</h2>
        <p>$921.48</p>
      </div>
      <div className="vertical-align" style={{ marginRight: "28px" }}>
        <img src={"/images/logo.svg"} height={"40px"} alt="logo"></img>
      </div>
    </div>
  );
};

export default GraphHeader;
