import React from "react";
import { Radio } from "@mui/material";

export default function CheckBox(props) {
  const { style, label, value, checked, onChange } = props;
  return (
    <span style={style}>
      <span>{label}</span>
      <Radio checked={checked} value={value} onChange={onChange} />
    </span>
  );
}
