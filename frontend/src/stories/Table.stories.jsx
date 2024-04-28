import Table from "../components/Table";
import TableBody from "../components/TableBody";
import TableCell from "../components/TableCell";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";

export default {
  title: "Common/Table",
  component: Table,
  argTypes: {},
};

export const Default = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">코인</TableCell>
          <TableCell align="center">시가 총액</TableCell>
          <TableCell align="center">현재 시세</TableCell>
          <TableCell align="right">거래 시간</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>비트코인</TableCell>
          <TableCell align="center">100,000,000</TableCell>
          <TableCell align="center">4,000,000</TableCell>
          <TableCell align="right">2024-03-24 16:00:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>이더리움</TableCell>
          <TableCell align="center">10,000,000</TableCell>
          <TableCell align="center">1,000,000</TableCell>
          <TableCell align="right">2024-03-24 15:00:00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
