import { fonts } from "@/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  fontSize?: string;
  borderColor?: string;
  borderRadius?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}

interface CustomeButtonComponentProps extends CustomButtonProps {
  fullWidth?: boolean;
  className?: string;
  size?: "small" | "large" | "medium" | undefined;
}

// Define the custom styled button
const CustomButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== "width" &&
    propName !== "height" &&
    propName !== "backgroundColor" &&
    propName !== "color" &&
    propName !== "fontSize" &&
    propName !== "borderColor" &&
    propName !== "borderRadius" &&
    propName !== "variant" &&
    propName !== "marginLeft" &&
    propName !== "marginRight",
})<CustomButtonProps>(
  ({
    width,
    height,
    backgroundColor,
    color,
    fontSize,
    borderColor,
    borderRadius,
    marginLeft,
    marginRight,
    marginBottom,
    // variant,
  }) => ({
    width: width,
    height: height,
    fontSize: fontSize || "14px",
    backgroundColor: backgroundColor || "transparent",
    color: color || "white",
    borderColor: borderColor || null,
    borderRadius: borderRadius || 0,
    ml: marginLeft || null,
    mr: marginRight || null,
    fontFamily: fonts.family.default,
    padding:"5px 30px",
    "&:hover": {
      backgroundColor: backgroundColor || "lightGray",
    },
  })
);

const ButtonWrapper: React.FC<CustomeButtonComponentProps> = ({
  fullWidth = true,
  width,
  height,
  size,
  backgroundColor,
  color,
  borderColor,
  borderRadius,
  variant,
  fontSize,
  children,
  className,
  marginLeft,
  marginRight,
  marginBottom,
  onClick,
}) => {
  return (
    <CustomButton
      fullWidth={fullWidth}
      variant={variant}
      width={width}
      height={height}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      className={className}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
};

export default ButtonWrapper;
