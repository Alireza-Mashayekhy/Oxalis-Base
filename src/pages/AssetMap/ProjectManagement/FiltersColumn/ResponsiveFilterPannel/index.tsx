import { breakpoints } from "@/styles";
import { SFC } from "@/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import FilterPannel from "../FilterPannel";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "@/selectors/state";
import { darkTheme, lightTheme } from "@/styles/theme";

const ResponsiveFilterPannel: SFC = () => {
  const [expanded, setExpanded] = useState(null);
  const isResponsive = useMediaQuery(`(max-width:${breakpoints.mobile})`);
  const theme = useSelector(getTheme);

  const handleToggle =
    (panel: string) => (event: React.ChangeEvent<HTMLElement>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleAccordionCloseInResponsiveMode = () => {
    setExpanded(false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
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
          <FilterPannel
            isResponsive={isResponsive}
            handleAccordionCloseInResponsiveMode={
              handleAccordionCloseInResponsiveMode
            }
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResponsiveFilterPannel;
