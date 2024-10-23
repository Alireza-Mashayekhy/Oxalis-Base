import { SFC } from "@/types";
import CreateUser from "./FilterPannel/CreateUser/index";
import TopBar from "./TopBar";
import ResponsiveCreateUserPannel from "./ResponsiveCreateUserPannel";
import PageTemplate from "@/components/PageTemplate";
import MainContent from "./MainContent";

const User: SFC = () => {
  return (
    <PageTemplate
      TopBar={TopBar}
      // InformativeHeader1={InformativeHeader1}
      // InformativeHeader2={InformativeHeader2}
      // InformativeHeader3={InformativeHeader3}
      // InformativeHeader4={InformativeHeader4}
      // InformativeHeader5={InformativeHeader5}
      // InformativeHeader6={InformativeHeader6}
      FilterPannel={CreateUser}
      ResponsiveFilterPannel={ResponsiveCreateUserPannel}
      MainContent={MainContent}
    />
  );
};

export default User;
