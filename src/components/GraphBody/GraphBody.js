import MonthlyReport from "./MonthlyReport";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const GraphBody = () => {
  const [data, setData] = useState([]);
  const today = (new Date().getDay() - 1) % 7;

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((output) => {
        output.forEach((element, index) => {
          if (index === today) {
            element["fillColor"] = "#B4E0E5";
          } else {
            element["fillColor"] = "#EC755D";
          }
          element["showLabel"] = false;
        });
        setData(output);
      })
      .catch((err) => console.log("ERROR", err));
  }, [today]);

  const onMouseEnter = (e, index) => {
    if (index !== today) {
      const dataUpdate = [...data];
      dataUpdate[index].fillColor = "#FF9B86";
      setData(dataUpdate);
    }
  };

  const onMouseLeave = () => {
    const dataUpdate = [...data];
    dataUpdate.forEach((element, index) => {
      if (index !== today) {
        element["fillColor"] = "#EC755D";
      }
    });
    setData(dataUpdate);
  };

  return (
    <div className="graph-body" style={{ position: "relative" }}>
      <h1 style={{ marginBottom: "50px" }}>Spending - Last 7 days</h1>

      <ResponsiveContainer height="80%" width="100%" aspect="1.5">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Bar
            dataKey="amount"
            radius={[8, 8, 8, 8]}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOut={onMouseLeave}
          >
            {data.map((entry, index) => {
              return <Cell key={index} fill={entry["fillColor"]} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div
        style={{
          border: "1px solid #F8E9DD",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      />
      <MonthlyReport />
    </div>
  );
};

export default GraphBody;
