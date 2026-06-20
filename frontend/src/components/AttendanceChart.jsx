import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function AttendanceChart({ data }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Working Hours Analytics
      </h2>

      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="hours"
              stroke="#2563eb"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;