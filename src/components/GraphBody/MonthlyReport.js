const MonthlyReport = () => {
  return (
    <div className="monthly-report">
      <div className="monthly-total">
        <p className="description-text">Total this month</p>
        <p className="month-total">$478.33</p>
      </div>
      <div className="month-compare">
        <div className="month-pct">+2.4%</div>
        <p className="description-text">From previous month</p>
      </div>
    </div>
  );
};

export default MonthlyReport;
