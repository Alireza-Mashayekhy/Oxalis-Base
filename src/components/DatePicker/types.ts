import { DateObject } from 'react-multi-date-picker';

export interface DatePickerType {
    _setDate: (date: [string, string]) => void; // به‌روز شده
    _date?: string;
    fullWidth?: boolean;
}

export interface DatePickerConvert {
    date: string | DateObject;
    format: string;
}
