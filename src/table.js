
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, date, deployed, link, textbox) {
  return { name, date, deployed, link, textbox };
}

const rows = [
  createData('DT', (2/21), 2/12/21, 24, 4.0),
  createData('OTP Express', 3/10/21, 9.0, 37, 4.3),
  createData('Amazon', 2/1/22, 16.0, 24, 6.0),
  createData('Duroflex',3/7/21, 3.7, 67, 4.3),
  createData('Sakra', 8/7/21, 16.0, 49, 3.9),
  createData('DT', 2/12/21, 6.0, 24, 4.0),
  createData('OTP Express', 3/10/21, 9.0, 37, 4.3),
  createData('Amazon', 2/1/22, 16.0, 24, 6.0),
  createData('Duroflex',3/7/21, 3.7, 67, 4.3),
  createData('Sakra', 8/7/21, 16.0, 49, 3.9),
  createData('OTP Express', 3/10/21, 9.0, 37, 4.3),
  createData('Amazon', 2/1/22, 16.0, 24, 6.0),
  createData('Duroflex',3/7/21, 3.7, 67, 4.3),
  createData('Sakra', 8/7/21, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CRM's</StyledTableCell>
            <StyledTableCell align="right">Started</StyledTableCell>
            <StyledTableCell align="right">Deployed</StyledTableCell>
            <StyledTableCell align="right">Github link</StyledTableCell>
            <StyledTableCell align="right">textbox</StyledTableCell>
            <StyledTableCell align="right">delete</StyledTableCell>
    
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.deployed}</StyledTableCell>
              <StyledTableCell align="right">{row.link}</StyledTableCell>
              <StyledTableCell align="right">{row.textbox}</StyledTableCell>
              <StyledTableCell align="right">{row.delete}</StyledTableCell>
           
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



