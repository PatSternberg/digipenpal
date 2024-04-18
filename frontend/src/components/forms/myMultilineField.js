import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MyMultilineField(props) {
  const { label, placeholder, name, control } = props
  return (
      <Controller
        name = {name}
        control = {control}
        render = {({
          field: { onChange, value },
        }) => (
          <TextField
          id="filled-multiline-static"
          label={label}
          multiline
          rows={4}
          variant="filled"
          onChange={onChange}
          value={value}
          placeholder={placeholder || 'Add a comment'} />
        )}
        />
  );
}
