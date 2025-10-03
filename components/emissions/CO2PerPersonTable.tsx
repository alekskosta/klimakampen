import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import showCountryInfo from "@/data/info";
import styles from "./Co2PerPersonTable.module.css";

export default function CO2PerPersonTable() {
  const rows = [...showCountryInfo()].sort(
    (a, b) => b.co2PerPerson - a.co2PerPerson
  );
  return (
    <Table className={styles.table}>
      <TableCaption>CO₂ per innbygger (tonn) – topp 20 (2023)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Land</TableHead>
          <TableHead>Co2 pr person</TableHead>
          <TableHead>Årstall</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row.id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{row.country}</TableCell>
            <TableCell>{row.co2PerPerson}</TableCell>
            <TableCell>{row.year}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
