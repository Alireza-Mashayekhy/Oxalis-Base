import { SFC } from "@/types";
import TopBar from "./TopBar";
import FilterPannel from "./FiltersColumn/FilterPannel/index";
import MainContent from "./MainContent/index";
import InformativeHeader1 from "./Header/InformativeHeader1";
import InformativeHeader2 from "./Header/InformativeHeader2";
import InformativeHeader3 from "./Header/InformativeHeader3";
import InformativeHeader4 from "./Header/InformativeHeader4";
import InformativeHeader5 from "./Header/InformativeHeader5";
// import InformativeHeader7 from "./Header/InformativeHeader7";
import ResponsiveFilterPannel from "./FiltersColumn/ResponsiveFilterPannel";
import InformativeHeader6 from "./Header/InformativeHeader6";
import PageTemplate from "@/components/PageTemplate";

const NewData: SFC = () => {
  return (
    <PageTemplate
      TopBar={TopBar}
      InformativeHeader1={InformativeHeader1}
      InformativeHeader2={InformativeHeader2}
      InformativeHeader3={InformativeHeader3}
      InformativeHeader4={InformativeHeader4}
      InformativeHeader5={InformativeHeader5}
      InformativeHeader6={InformativeHeader6}
      // InformativeHeader7={InformativeHeader7}
      FilterPannel={FilterPannel}
      ResponsiveFilterPannel={ResponsiveFilterPannel}
      MainContent={MainContent}
    />
  );
};

export default NewData;
