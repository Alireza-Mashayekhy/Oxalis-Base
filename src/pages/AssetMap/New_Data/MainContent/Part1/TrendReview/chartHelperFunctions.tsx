import SquareIcon from "@mui/icons-material/Square";

export const renderLegend = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px",
        gridTemplateColumns: "max-content max-content",
        gap: "1em",
        fontSize: "10px",
        color: "#cda558",
        fontWeight: 600,
      }}
    >
      <SquareIcon sx={{ fontSize: "10px" }} />
      {/* نوع دارایی : {assetsType} */}
    </div>
  );
};
export const customTickFormatter = (value) => {
  return Math.round(value / 1000000000).toLocaleString("en-US");
};
