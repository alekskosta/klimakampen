import { Actions } from "@/data/info";
import Link from "next/link";
import styles from "./ClimateActionCard.module.css";
import Image from "next/image";

type Props = {
  items: Actions[];
};

export default function ClimateActionCard({ items }: Props) {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => {
        return (
          <article key={item.id} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={600}
              className="img"
              priority={true}
            />

            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <Link href="/" className="link">
              Les mer her
            </Link>
          </article>
        );
      })}
    </div>
  );
}
