import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form';

export default function SimpleTextField(props) {
  const {label, placeholder, name, control} = props
  return (
      <Controller
        name = {name}
        control = {control}
        render = {({
          field: {onChange, value},
          fieldState: {error},
          formState,
        }) => (
          <TextField
            id="filled-basic"
            label={label}
            onChange={onChange}
            value={value}
            variant="filled"
            placeholder={placeholder} />
        )}
        />
  );
}
