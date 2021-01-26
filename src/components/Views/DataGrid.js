import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './DataGridStyle.css'

const DataGrid = ({ datosGrilla = []}) => datosGrilla.length
  ? (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
        </TableHead>
        <TableBody>
          {datosGrilla.map(({name},index) => (
            <TableRow key={`${name}-${index}`} value={name}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ):null

export default DataGrid;
