import Logo from "../../shared-components/Logo";

const GraphHeader = () => {
  return (
    <div className="graph-header">
      <div className="balance vertical-align">
        <h2>My Balance</h2>
        <p>$921.48</p>
      </div>
      <Logo />
    </div>
  );
};

export default GraphHeader;
