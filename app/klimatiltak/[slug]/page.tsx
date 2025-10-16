import { showInfo } from "@/data/info";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClimateActionPage({ params }: Props) {
  const { slug } = await params;
  const action = showInfo().find((act) => act.slug === slug);
  if (!action) {
    return notFound();
  } else
    return (
      <section className={"slug-section"}>
        <img
          src="/ClimateImage/coldthree.png"
          className="absolute5"
          aria-hidden="true"
        />

        <img
          src="/ClimateImage/coldthree.png"
          className="absolute6"
          aria-hidden="true"
        />
        <article className={styles.actionArticle}>
          <header>
            <h1 className="page-titles">{action.title}</h1>
          </header>

          <figure>
            <Image
              className={styles.slugImage}
              src={action.image}
              alt={action.title}
              width={600}
              height={600}
              priority={true}
            />
          </figure>

          <section>
            <h2 className={styles.underTitle}>{action.bodyTitle}</h2>
            <p>{action.body}</p>
          </section>

          {action.sections.map((sec) => (
            <section key={sec.id} aria-labelledby={sec.id}>
              <h2 id={sec.id} className={styles.underTitle}>
                {sec.title}
              </h2>
              <p>{sec.text}</p>
              <ul className={styles.underList}>
                {sec.bullets.map((bul) => (
                  <li key={bul.id}>{bul.text}</li>
                ))}
              </ul>
            </section>
          ))}

          <footer>
            <Link href="/klimatiltak" className="buttonLink page-link">
              Tilbake
            </Link>
          </footer>
        </article>
      </section>
    );
}
