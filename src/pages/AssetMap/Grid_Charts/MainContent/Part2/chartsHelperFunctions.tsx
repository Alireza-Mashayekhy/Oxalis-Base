import * as S from "./Styles";
import SquareIcon from "@mui/icons-material/Square";
import React from "react";

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <S.TooltipContainer>
        <S.P>{`${payload[0].name}`}</S.P>
        <S.P>{`${payload[0].value.toLocaleString()}`}</S.P>
      </S.TooltipContainer>
    );
  }

  return null;
};

export const RenderCustomLegend = (props) => {
  const { payload } = props;

  return (
    <S.LegendContainer>
      {payload.map((entry, index) => (
        <React.Fragment key={index}>
          <span style={{ display: "inline-block", marginRight: "10px" }}>
            <SquareIcon sx={{ fontSize: "10px", mx: 1, color: entry.color }} />
          </span>
          <span style={{ color: entry.color }}>{entry.value}</span>
        </React.Fragment>
      ))}
    </S.LegendContainer>
  );
};
