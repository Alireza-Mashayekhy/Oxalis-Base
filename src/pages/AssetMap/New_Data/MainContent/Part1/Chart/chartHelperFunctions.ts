import {
  Box,
  Button,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import * as S from "./Styles"

//This function is for filtering uncomment it when needed
// const handleChange = (event) => {
//   const selectedOptions = Array.from(event.target.selectedOptions).map(
//     (option) => option.value
//   );
//   setChartData(selectedOptions);

//   if (selectedOptions.length !== 0) {
//     setChartData(filterBaseOnFundType(jsonData, selectedOptions));
//     return;
//   }
//   setChartData(dailyValueBaseOnNameOfFund(jsonData));
// };

const customTickFormatter = (value) => {
  return Math.round(value / 1000000000).toLocaleString("en-US");
  return value.toLocaleString("en-US");
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Paper
        sx={{
          textAlign: "left",
          py: 1,
          px: 2,
          fontFamily: "inherit",
        }}
      >
        <S.FlexContainer>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "IRANSans",
              fontWeight: 500,
              pt: 1,
              mr: 2,
              mb: 1,
              color: "#161415",
            }}
          >
            نام صندوق
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "IRANSans",
              fontWeight: 500,
              pt: 1,
              mb: 1,
              color: "#161415",
            }}
          >
            : {label}
          </Typography>
        </S.FlexContainer>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "IRANSans",
            fontWeight: 500,
            pt: 1,
            mb: 1,
            color: "#161415",
            textAlign: "center",
          }}
        >
          ارزش دارایی (ریال)
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "IRANSans",
            fontWeight: 700,
            pt: 3,
            mb: 4,
            color: "black",
          }}
        >
          {payload[0].value.toLocaleString("en-US")}
        </Typography>
      </Paper>
    );
  }

  return null;
};

const handleFilter = () => {
  if (fundTypeName.length !== 0) {
    setChartData(filterBaseOnFundType(jsonData, fundTypeName));
    return;
  }
  setChartData(dailyValueBaseOnNameOfFund(jsonData));
};
export const renderLegend = (props) => {
  const { payload } = props;
  const legendLabels = [
    { label: " 1,000 B >", color: "#4dbaa3" },
    { label: "1,000 B - 25,000 B", color: "#ee930e" },
    { label: "< 25,000 B", color: "#f55074" },
  ];
  return (
    <Paper
      sx={{
        backgroundColor: "#282828",
        width: "max-content",
        pr: 4,
        py: 1,
        position: "absolute",
        top: -320,
        left: 80,
      }}
    >
      {legendLabels.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "end",
            alignItems: "baseLine",
            fontSize: "10px",
            fontFamily: "IRANSans",
            color: item.color,
            fontWeight: 600,
            marginBottom: "2px",
          }}
        >
          <SquareIcon sx={{ fontSize: "10px", mx: 1 }} />
          {item.label}
        </div>
      ))}
    </Paper>
  );
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export const getColor = (entry) => {
  if (entry.value < 1000000000000) {
    return "#4dbaa3"; // Color for values under 1 million
  } else if (entry.value >= 1000000000000 && entry.value <= 25000000000000) {
    return "#ee930e"; // Color for values between 1 to 4 million
  } else {
    return "#f55074"; // Color for values bigger than 3 million
  }
};
