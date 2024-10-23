import { SFC } from "@/types";
import * as S from "./Styles";

interface TabPanelProps {
  tabDetails: {
    children: React.ReactNode | string;
    value: number;
    id: number;
  }[];
  value: number;
}

const TabPanel: SFC<TabPanelProps> = (props: TabPanelProps) => {
  const { tabDetails, value, ...other } = props;

  return (
    <>
      {tabDetails.map((item, index) => (
        <div
          key={item.id}
          role="tabpanel"
          hidden={value !== item.value}
          // hidden={item.value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
          style={{ padding: "0px" }}
        >
          {value === item.value && (
            <>
              <S.Container>{item.children}</S.Container>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default TabPanel;
