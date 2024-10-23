import { SFC } from "@/types";
import * as S from "./Styles";
import PrimeTextArea from "../TextArea";

interface CommentsInterface {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitComment: () => void;
}

const Comments: SFC<CommentsInterface> = ({
  value,
  onChange,
  onSubmitComment,
}) => {
  return (
    <>
      <S.Container>
        <div>پیام :</div>
        <div>
          <PrimeTextArea value={value} onChange={onChange} rows={16} />
        </div>
        <div>
          <S.Button onClick={onSubmitComment}>ارسال</S.Button>
        </div>
      </S.Container>
    </>
  );
};

export default Comments;
