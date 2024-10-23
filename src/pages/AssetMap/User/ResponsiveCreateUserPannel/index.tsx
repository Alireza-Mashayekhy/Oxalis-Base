import { breakpoints, colors, fonts } from "@/styles";
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
import { getTheme } from "@/selectors/state";
import { darkTheme, lightTheme } from "@/styles/theme";
import CreateUser from "../FilterPannel/CreateUser";

const ResponsiveCreateUserPannel: SFC = () => {
  const [expanded, setExpanded] = useState(false);
  const isResponsive = useMediaQuery(`(max-width:${breakpoints.mobile})`);
  const theme = useSelector(getTheme);

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
                fontSize: `${fonts.size.m} `,
                // fontFamily: `${fonts.family.default}`,
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
          ایجاد کاربر جدید
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
          <CreateUser
            isResponsive
            handleAccordionCloseInResponsiveMode={
              handleAccordionCloseInResponsiveMode
            }
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResponsiveCreateUserPannel;
