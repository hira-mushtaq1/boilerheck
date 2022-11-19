import { Button, CircularProgress } from "@mui/material";
import React from "react";

function FullScreenLoader({ isLoading, onHide }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: isLoading ? "flex" : "none",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fff",
        zIndex: 100000,
      }}
    >
      {isLoading && <CircularProgress />}
      <Button variant="primary" onClick={onHide}>
        Hide
      </Button>
    </div>
  );
}

export default FullScreenLoader;
