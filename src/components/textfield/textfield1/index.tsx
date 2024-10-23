import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller, Control } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  name: string;
  control: Control;
}

const TextField_n1: React.FC<TextFieldProps> = ({ label, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id="outlined-basic"
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextField_n1;