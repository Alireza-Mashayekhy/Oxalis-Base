import { breakpoints } from "@/styles";
import { SFC } from "@/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getTabIndex, getTheme } from "@/selectors/state";
import { darkTheme, lightTheme } from "@/styles/theme";
import AssetMapFilterPannel from "../FilterPannel/AssetMap";
import DepositeFilterPannel from "../FilterPannel/Deposite";
import BondFilterPannel from "../FilterPannel/Bond";
import ShareFilterPannel from "../FilterPannel/Share";
import CashflowFilterPannel from "../FilterPannel/Cashflow";

const ResponsiveFilterPannel: SFC = () => {
  const [expanded, setExpanded] = useState(false);
  const isResponsive = useMediaQuery(`(max-width:${breakpoints.mobile})`);
  const theme = useSelector(getTheme);
  const activeIndex = useSelector(getTabIndex);

  const handleToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAccordionCloseInResponsiveMode = () => {
    setExpanded(false);
  };
  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={handleToggle("panel1")}
        slotProps={{ transition: { unmountOnExit: true } }}
        elevation={1}
        sx={{
          backgroundColor: "transparent",
          color: `${
            theme === "dark" ? darkTheme.textColor : lightTheme.textColor
          }`,
        }}
      >
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownOutlinedIcon
              sx={{
                color: `${
                  theme === "dark" ? darkTheme.textColor : lightTheme.textColor
                }`,
                fontSize: "1rem",
              }}
            />
          }
          sx={{
            backgroundColor: `${
              theme === "dark" ? darkTheme.secondary : lightTheme.secondary
            }`,
            "&.Mui-expanded": {
              minHeight: "20px",
              "& > .MuiAccordionSummary-content": {
                margin: "0",
                "&.Mui-expanded": {
                  margin: "0",
                },
              },
            },
            ".MuiAccordionSummary-content": {
              margin: "0",
              "&.Mui-expanded": {
                margin: "0",
              },
            },
          }}
        >
          فیلترها
        </AccordionSummary>
        <AccordionDetails
          sx={{
            minHeight: "50vh",
            padding: 0,
            overflow: "auto",
            position: "relative",
            zIndex: 10,
            backgroundColor: `${
              theme === "dark" ? darkTheme.secondary : lightTheme.secondary
            }`,
          }}
        >
          {
            <>
              {activeIndex === 0 && (
                <AssetMapFilterPannel
                  isResponsive={isResponsive}
                  handleAccordionCloseInResponsiveMode={
                    handleAccordionCloseInResponsiveMode
                  }
                />
              )}
              {activeIndex === 1 && (
                <DepositeFilterPannel
                  isResponsive={isResponsive}
                  handleAccordionCloseInResponsiveMode={
                    handleAccordionCloseInResponsiveMode
                  }
                />
              )}
              {activeIndex === 2 && (
                <BondFilterPannel
                  isResponsive={isResponsive}
                  handleAccordionCloseInResponsiveMode={
                    handleAccordionCloseInResponsiveMode
                  }
                />
              )}
              {activeIndex === 3 && (
                <ShareFilterPannel
                  isResponsive={isResponsive}
                  handleAccordionCloseInResponsiveMode={
                    handleAccordionCloseInResponsiveMode
                  }
                />
              )}
              {activeIndex === 4 && (
                <CashflowFilterPannel
                  isResponsive={isResponsive}
                  handleAccordionCloseInResponsiveMode={
                    handleAccordionCloseInResponsiveMode
                  }
                />
              )}
            </>
          }
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResponsiveFilterPannel;
