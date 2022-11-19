import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { getData, getDataFull } from "../config/firebaseMethods";


export default function Courses() {
  const [Data, setData] = React.useState();

  React.useEffect(() => {
    getDataFull("courses").then((data) => {
      setData([data]);
    });
  }, []);

  return (
    <>
      <Typography variant="h3">Courses</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Course Name</TableCell>
              <TableCell align="left">Subjects</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data && Data.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.course}
                </TableCell>
                <TableCell align="left">{row.subjects}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
