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
  unit?: string;
};

export default function CalculatorResultTable({ rows }: { rows: Row[] }) {
  return (
    <Table className={styles.table}>
      <TableCaption className={styles.caption}>
        Ditt årlige resultat målt opp mot gjennomsnitts personen i Norge.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className={styles.head}>#</TableHead>
          <TableHead className={styles.head}>Aktivitet</TableHead>
          <TableHead className={styles.head}>Ditt utslipp</TableHead>
          <TableHead className={styles.head}>Gjennomsnitt</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row.activity}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{row.activity}</TableCell>
            <TableCell
              className={row.userValue <= row.avgValue ? "green" : "red"}
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
