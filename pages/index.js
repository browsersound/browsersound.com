import Link from "next/link";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>BROWSER | Festival for Web-based Music</title>
        <link rel="icon" href="/browser-logo.ico" />
      </Head>

      <main>
        <h1 className="title">
          BROWSER {""}
          <Link href="/posts/about">
            <a>2021</a>
          </Link>
        </h1>

        <p className="description">
          A Festival of Web-based Music | June 11th-13th
        </p>

        <div className="grid">
          <a href="/posts/mozillahubs" className="card">
            <h3>
              Virtual Festival{" "}
              <span className={utilStyles.noBreak}>Grounds &rarr;</span>
            </h3>
            <p>
              Experience the festival through your own VR Avatar (a more open
              experience)
            </p>
          </a>

          <a Link href="/posts/livestream" className="card">
            <h3 className={utilStyles.noBreak}>Livestream &rarr;</h3>
            <p>
              Watch the festival through our curated livestream (a more
              conventional concert format)
            </p>
          </a>

          <a Link href="/posts/about" className="card">
            <h3 className={utilStyles.noBreak}>About &rarr;</h3>
          </a>

          <a
            Link
            href="https://www.brandonlincolnsnyder.com/email-reminder"
            className="card"
          >
            <h3>
              Remind <span className={utilStyles.noBreak}>Me! &rarr;</span>
            </h3>
            <p>
              Email reminder + Facebook Event for when the festival is about to
              begin.
            </p>
          </a>
        </div>

        <div className="bgWrap">
          <Image
            alt="tonejs-snippet"
            src="/images/Tone-JS-Snippet-000042.png"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          With support from:
          <a
            href="https://skam-ev.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/SKAM_logo_RZ.svg"
              alt="SKAM Logo"
              className="logo"
              title="S-K-A-M e.V"
            />
          </a>
          <a
            href="https://www.hmdk-stuttgart.de/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="/HMDK_Logo_1C.jpg"
              alt="HMDK Logo"
              className="logo"
              title="HMDK Stuttgart"
            />
          </a>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin: 0.5rem;
        }

        .footer-inner {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          margin: 10px
          height: 50px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 6rem;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }

        @media screen and (max-width: 768px) {
          .title {
            font-size: 3rem;
          }
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #fafafa;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .bgWrap {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          z-index: -1;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
