import { mdiSwapVertical } from "@mdi/js";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DotsMenu from "@/components/3DotsMenu";
import AreaChart from "@/components/AreaChart";
import { Label } from "@/components/Label";
import { setSelectedAssets } from "@/redux/store/allassets";
import { getAllAssets, getData, getTheme } from "@/selectors/state";
import { fonts } from "@/styles";
import { AllAssets, SFC } from "@/types";
import { Data } from "@/types";
import {
  getFundNameFromAllAssets,
  getSelectedFundNameData,
} from "@/utils/headersFunctions";

import * as S from "./Styles";

const options: string[] = [
  "سهامی",
  "صندوق در صندوق",
  "نیكوكاری",
  "درآمد ثابت",
  "کالایی",
];

const InformativeHeader1: SFC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [percentage, setPercentage] = useState(12);
  const data: Data[] = useSelector(getData)?.data;
  const allassets: AllAssets[] = useSelector(getAllAssets).allAssets;
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[1];

  const menuOptions = getFundNameFromAllAssets(allassets);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    const selectedFund = getSelectedFundNameData(allassets, menuOptions[index]);
    dispatch(setSelectedAssets(selectedFund));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const chartsData = data
    .filter((item: Data) => item.VENTURE_TYPE === options[selectedIndex])
    .map((item) => ({
      ...item,
      DAY_VALUE: Number(item.DAY_VALUE), // Convert DAY_PRICE from string to number as need for chart
    }));
  return (
    <S.Container>
      <S.HeaderContainer>
        <Label fontWeight={fonts.weight.semiBold} className="!text-xl z-[2]">
          {selectedFund?.fund}
        </Label>
        <S.MenuContainer>
          <MoreVertOutlinedIcon onClick={handleClick} />
          <DotsMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            options={
              menuOptions ? menuOptions : ["داده‌ای برای نمایش وجود ندارد"]
            }
            handleMenuItemClick={handleMenuItemClick}
          />
        </S.MenuContainer>
      </S.HeaderContainer>

      <S.BodyContainer>
        <div className="absolute top-[10%] z-10 left-5 flex flex-col items-center">
          <Label className=" !text-lg " fontWeight={fonts.weight.semiBold}>
            4.436
          </Label>
          <Label className=" !text-sm " fontWeight={fonts.weight.semiBold}>
            میلیارد ریال
          </Label>
          <Label
            fontWeight={fonts.weight.semiBold}
            className={` !text-lg ${percentage > 0 ? "!text-green-600" : "!text-red-600"}  flex items-center`}
          >
            {percentage}%
            <S.Icon path={mdiSwapVertical} size="18px" />
          </Label>
        </div>
        <div className="w-[80%] ">
          <AreaChart
            withoutItems
            labels={["test", "test2"]}
            datasets={[{ name: "test", data: [2, 3] }]}
            selectedHeight="100%"
          />
        </div>
      </S.BodyContainer>
    </S.Container>
  );
};

export default InformativeHeader1;
