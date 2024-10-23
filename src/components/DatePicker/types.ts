import { DateObject } from "react-multi-date-picker";

export interface DatePickerType {
  _setDate?: React.Dispatch<React.SetStateAction<string>>;
  _date?: string;
  fullWidth?: boolean;
}

export interface DatePickerConvert {
  date: string | DateObject;
  format: string;
}
