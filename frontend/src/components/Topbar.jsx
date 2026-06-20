import {
  Notifications,
  Search,
} from "@mui/icons-material";

function Topbar() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#f3f4f6",
          padding: "10px 15px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <Search />

        <input
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            marginLeft: "10px",
            width: "100%",
          }}
        />
      </div>

      <Notifications />
    </div>
  );
}

export default Topbar;