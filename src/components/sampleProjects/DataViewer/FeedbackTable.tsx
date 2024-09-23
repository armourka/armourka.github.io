import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FeedbackSubmission } from '../../../features/feedback/types';

interface FeedbackTableProps {
  data: FeedbackSubmission[]
}
export const FeedbackTable: React.FC<FeedbackTableProps> = (props: FeedbackTableProps) => {
  const { data } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> Product </TableCell>
            <TableCell align="right"> Rating </TableCell>
            <TableCell align="right"> Recommendation Score </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: FeedbackSubmission, idx: number) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.recScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

