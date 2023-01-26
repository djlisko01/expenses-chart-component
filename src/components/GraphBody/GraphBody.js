import MonthlyReport from "./MonthlyReport";

const GraphBody = () => {
  return (
    <div className="graph-body">
      <h2>Spending - Last 7 days</h2>
      <div style={{ height: "460.5px" }}></div>
      <hr />
      <MonthlyReport />
    </div>
  );
};

export default GraphBody;
