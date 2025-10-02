import { showInfo } from "@/data/info";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClimateActionPage({ params }: Props) {
  const { slug } = await params;
  const action = showInfo().find((act) => act.slug === slug);
  if (!action) {
    return (
      <article>
        <h1>Ooops, denne siden finnes ikke</h1>
      </article>
    );
  } else
    return (
      <section className={styles.sectionAction}>
        <h1 className="page-titles">{action.title}</h1>
        <Link href="/klimatiltak" className="page-link">
          Tilbake
        </Link>

        <article className={styles.actionArticle}>
          <Image
            src={action.image}
            alt={action.title}
            width={600}
            height={600}
            priority={true}
          />
          <p>{action.body}</p>
        </article>
      </section>
    );
}
