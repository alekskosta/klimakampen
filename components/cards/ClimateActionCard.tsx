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
              className={styles.climateImage}
              src={item.image}
              alt={item.title}
              width={600}
              height={600}
              priority={true}
            />

            <h2 className={styles.climateTitle}>{item.title}</h2>

            <p>{item.summary}</p>
            <div>
              <Link
                href={`/klimatiltak/${item.slug}`}
                className="buttonLink"
                aria-label={`Les mer om ${item.title}`}
              >
                Les mer her
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
