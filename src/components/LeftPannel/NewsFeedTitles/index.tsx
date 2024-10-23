import { SFC } from "@/types";
import NewsWrapper from "./NewsWrapper";
import * as S from "./Styles";

const newsItems = [
  {
    id: 1,
    title: "احتمال افزایش قیمت ارز",
    summary: "افزایش قیمت در کوارتر قبل از 12%",
  },
  {
    id: 2,
    title: "کاهش نرخ بهره بانک مرکزی",
    summary: "کاهش بهره در کوارتر قبل از 2%",
  },
  {
    id: 3,
    title: "قانون گذاری احتمال افزایش تقاضابرای محصول به دلیل ممنوعیت واردات",
    summary: "افزایش تقاضا در کوارتر قبل ار 20%",
  },
  {
    id: 4,
    title: "احتمال کاهش قیمت مشتقات نفتی و گازی",
    summary: "تحلیل خبره به دلیل کاهش سرما",
  },
  {
    id: 5,
    title: "احتمال ریزش نیرو در سال جدید",
    summary: "ریزش در زمان مشابه سال قبل 12%",
  },
];
const NewsFeedTitles: SFC = () => {
  return (
    <S.NewsContainer>
      {newsItems.map((item) => (
        <NewsWrapper key={item.id} title={item.title} summary={item.summary} />
      ))}
    </S.NewsContainer>
  );
};

export default NewsFeedTitles;
