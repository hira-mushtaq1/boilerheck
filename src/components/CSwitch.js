import Switch from "@mui/material/Switch";

function CSwitch(props) {
  const { label, onChange, value, checked } = props;
  return (
    <>
      <Switch
        checked={value}
        value={value}
        label={label}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
}
export default CSwitch;
