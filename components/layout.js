import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "BROWSER";
export const siteTitle = "BROWSER | Festival for Web-based Music";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/browser-logo.ico" />
        <meta
          name="description"
          content="BROWSER, a festival for Web-based music"
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
          <Link href="/">{name}</Link>
        </h2>
        <div className={styles.headerDescription}>
          <p>A Festival of Web-based Music </p>
          <div className={styles.divider}></div>
          <p className={utilStyles.noBreak}>June 11th-13th</p>
        </div>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
