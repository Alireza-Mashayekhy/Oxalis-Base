import { SFC } from "@/types";
import * as S from "./Styles";
import NewsFeedTitles from "./NewsFeedTitles";
import NewsFeedBtn from "./NewsFeedBtn";
import Header from "./Header";
import CalendarDisplay from "./Calendar";

const NewsFeedColumn: SFC = () => {
  return (
    <S.Container>
      <Header />
      <CalendarDisplay />
      <NewsFeedBtn />
      <NewsFeedTitles />
    </S.Container>
  );
};

export default NewsFeedColumn;
