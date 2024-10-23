import React, { useEffect, useState } from "react";
import { SFC } from "@/types";
import jsonData from "../../Part1/chartData.json";
import { filterBaseOnBankDeposite } from "@/utils/chartsFunctions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Paper, Typography } from "@mui/material";

const EnvironmentLawsAndIssuesChart: SFC = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(filterBaseOnBankDeposite(jsonData));
  }, []);

  return (
    <>
      <div style={{ marginTop: "10%" }}>
        <ResponsiveContainer height={300} width={"100%"}>
          <BarChart
            // width={600}
            // height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="1 0"
              stroke="#656364"
              opacity={0.5}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              // interval={0}
              tick={{
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "10px",
                fill: "#656364",
              }}
            />
            <YAxis
              type="number"
              tick={{
                fontSize: "12px",
                fontWeight: 600,
                fill: "#656364",
                fontFamily: "IRANSans",
              }}
              // tickCount={5}
              // interval={0}
            />
            <Tooltip content={customTooltip} cursor={{ fill: "transparent" }} />
            {/*    <Legend content={<RenderLegend />} /> */}

            <Bar
              dataKey="shortTermN"
              stackId="a"
              radius={[1, 1, 1, 1]}
              fill="#09797b"
            />
            <Bar
              dataKey="longTermN"
              stackId="a"
              radius={[1, 1, 1, 1]}
              fill="#193a49"
            />
            <Bar
              dataKey="checkingN"
              stackId="a"
              radius={[1, 1, 1, 1]}
              fill="#f3931d"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default EnvironmentLawsAndIssuesChart;

const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Paper
        sx={{
          textAlign: "left",
          py: 1,
          px: 2,
          fontFamily: "IRANSans",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            // variant="span"
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              pt: 1,
              mr: 2,
              mb: 1,
              color: "black",
              fontFamily: "IRANSans",
            }}
          >
            نام صندوق
          </Typography>
          <Typography
            // variant="span"
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              pt: 1,
              mb: 1,
              color: "black",
              fontFamily: "IRANSans",
            }}
          >
            : {payload[0].payload.name}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            pt: 1,
            mb: 1,
            color: "#09797b",
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          سپرده کوتاه مدت (ریال)
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            pt: 1,
            mb: 1,
            color: "black",
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          {payload[0].payload.shortTerm
            ? payload[0].payload.shortTerm.toLocaleString("en-US")
            : 0}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            pt: 1,
            mb: 1,
            color: "#4cbba2",
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          سپرده بلند مدت (ریال)
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            pt: 1,
            mb: 1,
            color: "black",
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          {payload[0].payload.longTerm
            ? payload[0].payload.longTerm.toLocaleString("en-US")
            : 0}
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            pt: 1,
            mb: 1,
            color: "#f3931d",
            // color: theme.palette.secondary.main,
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          جاری (ریال)
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            pt: 1,
            color: "black",
            textAlign: "center",
            fontFamily: "IRANSans",
          }}
        >
          {payload[0].payload.checking
            ? payload[0].payload.checking.toLocaleString("en-US")
            : 0}
        </Typography>
      </Paper>
    );
  }

  return null;
};
