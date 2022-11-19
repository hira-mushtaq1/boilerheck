import { Button } from "@mui/material";
import React, { useState } from "react";
import SDrawer from "../components/Drawer";
import FullScreenLoader from "../components/FullScreenLoader";

function Dashboard() {
  const [ShowLoadger, setShowLoadger] = useState(false);
  return (
    <div>
      <h1>Dashboard</h1>
      <button>Open</button>
      <Button variant="primary" onClick={() => setShowLoadger(true)}>Show Loader</Button>
      <SDrawer />
      <FullScreenLoader
        isLoading={ShowLoadger}
        onHide={() => setShowLoadger(false)}
      />
    </div>
  );
}

export default Dashboard;
