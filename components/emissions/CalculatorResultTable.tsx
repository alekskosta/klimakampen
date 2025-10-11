import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./CalculatorResultTable.module.css";

type Row = {
  activity: string;
  userValue: number;
  avgValue: number;
};

export default function CalculatorResultTable({ rows }: { rows: Row[] }) {
  return (
    <Table className={styles.table}>
      <TableCaption>
        Ditt årlige resultat målt opp mot gjennomsnitts personen i Norge.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Aktivitet</TableHead>
          <TableHead>Ditt utslipp</TableHead>
          <TableHead>Gjennomsnitt</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row.activity}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{row.activity}</TableCell>
            <TableCell
              className={
                row.userValue <= row.avgValue ? styles.green : styles.red
              }
            >
              {row.userValue.toFixed(2)} <small>t CO₂e</small>{" "}
            </TableCell>
            <TableCell>
              {row.avgValue.toFixed(2)} <small>t CO₂e</small>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
