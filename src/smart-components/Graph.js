import GraphBody from "../components/GraphBody/GraphBody";
import GraphHeader from "../components/GraphHeader/GraphHeader";
import "./graph.css";
const Graph = () => {
  return (
    <div id="graph">
      <GraphHeader />
      <GraphBody />
    </div>
  );
};

export default Graph;
