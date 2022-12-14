import { Button } from "@mui/material";

function CButton(props) {
  const { label, onClick, disabled, variant } = props;
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant={variant ?? "contained"}
      >
        {label}
      </Button>
    </>
  );
}
export default CButton;
