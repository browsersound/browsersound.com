import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "BROWSER SOUND";
export const siteTitle = "BROWSER SOUND | Festival for Music and the Web";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/browser-logo.ico" />
        <meta
          name="description"
          content="BROWSER SOUND, a festival for Music and the Web"
        />
        <meta
          property="og:image"
          content={`browser-1.jpeg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" legacyBehavior>{name}</Link>
        </h2>
        <div className={styles.headerDescription}>
          <p>A Festival for Music and the Web </p>
          <div className={styles.divider}></div>
          <p className={utilStyles.noBreak}>July 21st-22nd 2023</p>
        </div>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
