import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

import { getAllAssets } from "@/selectors/state";
import { breakpoints } from "@/styles";
import { AllAssets, SFC } from "@/types";
import { getFundNameFromAllAssets } from "@/utils/headersFunctions";

import Chart1 from "./Chart1";
import * as S from "./Styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const ChartsContent: SFC = () => {
  const allassets: AllAssets[] = useSelector(getAllAssets).allAssets;
  const menuOptions = getFundNameFromAllAssets(allassets);
  const [value, setValue] = useState(0);
  const [showBarChart, setShowBarChart] = useState(true);
  const isMobile = useMediaQuery(`(max-width:${breakpoints.tablet} )`);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <S.Container>
        <S.CustomTabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {menuOptions.map((item, index) => (
            <S.StyledTab
              label={item}
              {...a11yProps(index)}
              sx={{ fontFamily: "inherit" }}
            />
          ))}
        </S.CustomTabs>
        {menuOptions.map((item, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Chart1
              fundName={item}
              showBarChart={showBarChart}
              setShowBarChart={setShowBarChart}
            />
          </TabPanel>
        ))}
      </S.Container>
    </>
  );
};

export default ChartsContent;
