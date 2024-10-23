import { SFC } from "@/types";
import * as S from "./Styles";
import ProjectModel from "./ProjectModel";

const ViewProject: SFC = () => {
  return (
    <S.Container>
      <ProjectModel />    
    </S.Container>
  );
};

export default ViewProject;
