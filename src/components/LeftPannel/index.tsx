import { SFC } from "@/types";

import CalendarDisplay from "./Calendar";
import Header from "./Header";
import NewsFeedBtn from "./NewsFeedBtn";
import NewsFeedTitles from "./NewsFeedTitles";
import * as S from "./Styles";

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
