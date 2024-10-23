import { SFC } from "@/types";
import * as S from "./Styles.ts";


interface TooltipInterface {
  target: string;
}

const PrimeTooltip: SFC<TooltipInterface> = ({ target }) => {
  return (
    <>
      <S.StyledTooltip target={target} mouseTrack mouseTrackLeft={10} />
    </>
  );
};
export default PrimeTooltip;
