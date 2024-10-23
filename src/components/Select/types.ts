import { SelectChangeEvent } from "@mui/material/Select";
export interface CustomSelectComponentProps extends StyledSelectProps {
  placeholder?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
}
export interface StyledMenuItemProps {
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  // ... include other style props as needed
}
export interface StyledSelectProps {
  fontSize?: string;
  width?: string;
  minHeight?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  marginBottom?: string;
  padding?: string;
  margin?: string;
}
