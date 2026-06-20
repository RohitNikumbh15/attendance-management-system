function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        borderRadius: "20px",
        padding: "25px",
        color: "white",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          fontSize: "40px",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;