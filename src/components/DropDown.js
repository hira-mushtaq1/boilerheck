import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export default function Dropdown(props) {
  const { label, required, onChange, dataSource, value } = props;
  return (
    <div>
      <FormControl fullWidth={true} sx={{ margin: "10px" }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          required={required}
          label={label}
          variant="standard"
          onChange={onChange}
          value={value}
        >
          {dataSource && props.dataSource.length > 0
            ? props.dataSource.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
}
