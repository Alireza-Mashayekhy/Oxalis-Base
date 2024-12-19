import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";

import { getTheme } from "@/selectors/state";
import { SFC } from "@/types";

import * as S from "./Styles";

interface DotsMenuProps {
  options: string[];
  handleMenuItemClick: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: (e: HTMLElement | null) => void;
}

const DotsMenu: SFC<DotsMenuProps> = ({
  options,
  handleMenuItemClick,
  anchorEl,
  setAnchorEl,
}) => {
  const theme = useSelector(getTheme);
  console.log(theme);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.StyledMenu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {options?.map((option, index) => (
        <MenuItem
          key={option}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
          {option}
        </MenuItem>
      ))}
    </S.StyledMenu>
  );
};

export default DotsMenu;
