import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FormControl } from "@mui/material";
import { useSelector } from "react-redux";

import { getTheme } from "@/selectors/state";
import { darkTheme, lightTheme } from "@/styles/theme";

import { StyledMenuItem, StyledSelect } from "./Styles";
import { CustomSelectComponentProps } from "./types";

const CustomSelectComponent: React.FC<CustomSelectComponentProps> = ({
  borderWidth,
  borderStyle,
  borderColor,
  width,
  fullWidth,
  minHeight,
  fontSize,
  margin,
  padding,
  options,
  selectedValue,
  placeholder,
  handleChange,
}) => {
  const theme = useSelector(getTheme);
  return (
    <FormControl fullWidth={fullWidth}>
      <StyledSelect
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        width={width}
        minHeight={minHeight}
        padding={padding}
        margin={margin}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        IconComponent={ArrowDropDownIcon}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            // paddingRight: "16px",
            // paddingLeft: "6px",
            textAlign: "right",
            fontSize: fontSize || "0.8rem",
            fontFamily: "IRANSans",
          },

          ".MuiOutlinedInput-notchedOutline": {
            border: "none", // Remove the default notched outline border
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor:
                theme === "dark" ? darkTheme.primary : lightTheme.primary,
              textAlign: "right",
              "& .MuiMenuItem-root": {
                backgroundColor:
                  theme === "dark" ? darkTheme.primary : lightTheme.primary,
                color:
                  theme === "dark" ? darkTheme.textColor : lightTheme.textColor, // MenuItem text color

                "&:hover": {
                  backgroundColor:
                    theme === "dark" ? darkTheme.hover : lightTheme.hover, // Slightly lighter black on hover
                },
              },
            },
          },
        }}
      >
        <StyledMenuItem value="" disabled>
          {placeholder}
        </StyledMenuItem>
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelectComponent;
