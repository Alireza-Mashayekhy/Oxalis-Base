import { SFC } from "@/types";

import ProjectModel from "./ProjectModel";
import * as S from "./Styles";

const ViewProject: SFC = () => {
  return (
    <S.Container>
      <ProjectModel />    
    </S.Container>
  );
};

export default ViewProject;
