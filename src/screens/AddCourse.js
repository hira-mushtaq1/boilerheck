import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sendData } from "../config/firebaseMethods";

const theme = createTheme();

export default function AddCourse() {
  const [Course, setCourse] = React.useState("");
  const [Subjects, setSubjects] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const onSubmit = async () => {
    const response = await sendData(
      {
        course: Course,
        subjects: Subjects,
      },
      "courses"
    );
    alert(response);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="course"
              label="Course name"
              name="course"
              autoFocus
              onChange={(e) => setCourse(e.target.value)}
              value={Course}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="subjects"
              label="Subjects"
              type="number"
              id="subjects"
              value={Subjects}
              onChange={(e) => setSubjects(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Add Course
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
