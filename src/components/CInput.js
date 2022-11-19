import { TextField } from "@mui/material";
import React from "react";

function CInput(props) {
  const { label, type, placeholder, required, disabled, onChange, value } =
    props;
  return (
    <>
      <TextField
        variant="standard"
        label={label}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </>
  );
}

export default CInput;
