import { useRef } from "react";

import { SFC } from "@/types";

import * as S from "./Styles";

interface upload {
  uploadText: React.ReactNode;
  setSelectedFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadComponent: SFC<upload> = ({ uploadText, setSelectedFiles }) => {
  //   const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;
    if (files && files.length > 0) {
      setSelectedFiles(event);
    }
  };
  return (
    <S.Container>
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <S.Button onClick={handleButtonClick}>{uploadText}</S.Button>
    </S.Container>
  );
};
export default UploadComponent;
