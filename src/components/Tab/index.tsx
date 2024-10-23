import * as S from "./Styles";
import { Tabs } from "@mui/material";

interface TabProps {
  value: number;
  tabs: { value: number; label: string; id: number }[];
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  orientation?: "vertical" | "horizontal";
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabWrapper: React.FC<TabProps> = (props) => {
  const { value, handleTabChange, tabs, orientation = "horizontal" } = props;

  return (
    <Tabs
      orientation={orientation}
      value={value}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      // allowScrollButtonsMobile
      // indicatorColor="primary"
      // textColor="primary"
      // ScrollButtonComponent={(props) => {
      //   if (props.direction === "left" && !props.disabled) {
      //     return (
      //       <IconButton
      //         {...props}
      //         onClick={(event) => {
      //           event.stopPropagation();
      //         }}
      //       >
      //         <ArrowRightIcon
      //           onClick={(event) => {
      //             event.stopPropagation();
      //           }}
      //         />
      //       </IconButton>
      //     );
      //   } else if (props.direction === "right" && !props.disabled) {
      //     return (
      //       <IconButton
      //         {...props}
      //         onClick={(event) => {
      //           event.stopPropagation();
      //         }}
      //       >
      //         <ArrowLeftIcon
      //           onClick={(event) => {
      //             event.stopPropagation();
      //           }}
      //         />
      //       </IconButton>
      //     );
      //   } else {
      //     return null;
      //   }
      // }}
      sx={{
        "& .MuiTabs-scrollButtons.Mui-disabled": {
          opacity: 1,
        },
      }}
    >
      {tabs.map((tab) => (
        <S.StyledTab
          key={tab.id}
          label={tab.label}
          value={tab.value}
          {...a11yProps(tab.value)}
          onClick={(event) => {
            event.stopPropagation();
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabWrapper;
