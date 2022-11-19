import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { signUpUser } from "../config/firebaseMethods";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  const navigate = useNavigate();
  let signUp = () => {
    setLoader(true);
    signUpUser({
      email,
      password,
      userName: "Hira",
      contact: "123456",
    })
      .then((success) => {
        setLoader(false);
        console.log(success);
        navigate("/login");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };
  return (
    <>
      <h1>Signup</h1>
      <Box>
        <Box>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Button variant="contained" disabled={isLoading} onClick={signUp}>
        {isLoading ? <CircularProgress /> : "Sign Up"}{" "}
      </Button>
    </>
  );
}
export default SignUp;
