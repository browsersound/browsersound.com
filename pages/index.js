import Link from "next/link";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
// import Document, { Html, Head, Main, NextScript } from "next/document"

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
        {/* google analytics tag
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-S9Z6QN5JV2"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S9Z6QN5JV2');
          </script> */}


        <title>BROWSER SOUND | New Music and the Web</title>
        <link rel="icon" href="/browser-logo.ico" />

      </Head>

      <img src="/images/browser header mail no logo 2_crop.png" classname="image-test" alt="Browser Sound 2023: Location Sharing" ></img>

      <main>
        <h1 className="title">
          BROWSER SOUND {""}
        </h1>
        

        <p className="description">
          A Festival for New Music and the Web
        </p>
        {/* <p className="description">
          Check here soon for the livestream link!
        </p> */}
        <div className="grid">
          <a Link href="https://youtube.com/live/ca_3pqYDLwA?feature=share" className="card">
            <h3>
              Music{" "}
              <span className={utilStyles.noBreak}></span>
            </h3>
            
          </a>

          <a Link href="https://us06web.zoom.us/j/88612066568?pwd=V1lXTlg4a2FSVEVkWUMrTFYzN3dXZz09" className="card">
            <h3>
              Blog{" "}
              <span className={utilStyles.noBreak}></span>
            </h3>
           
          </a>

          <a Link href="/posts/programming_2023" className="card">
            <h3>
              Bookings{" "}
              <span className={utilStyles.noBreak}></span>
            </h3>
            
          </a>

          <a Link href="/posts/program-notes_2021" className="card">
            <h3 className={utilStyles.noBreak}>About</h3>

          </a>





          {/* <a
            Link
            href="https://www.brandonlincolnsnyder.com/email-reminder"
            className="card"
          >
            <h3>
              Remind <span className={utilStyles.noBreak}>Me! &rarr;</span>
            </h3>
            <p>
              Join our email list to get up to date with this years festival
            </p>
          </a> */}
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
            href="https://digiscore.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/DigiScore-new-logo-with-added-circles-2022.png"
              alt="DigiScore Logo"
              className="logo"
              title="S-K-A-M e.V"
            />
          </a>

          <a
            href="https://digiscore.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/LOGO_ERC-FLAG_EU_.jpg"
              alt="ERC Logo"
              className="logo"
              title="S-K-A-M e.V"
            />
          </a>

          <a
            href="https://websoundart.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/WSA_logo.svg"
              alt="websoundart Logo"
              className="logo"
              title="WSA"
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
        a2 {
          color: #fae102;
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
          padding: 0 0.5rem;
          
        }
        .description2 {
          line-height: 1.5;
          font-size: 1.5rem;
          background: #fafafa;
          border-radius: 5px;
          padding: 0 0.5rem;
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
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: auto;
          max-width: 800px;
          margin-top: 1rem;
        }

        .grid-container{
          display:grid;
          grid-template-columns: auto ;
          grid-template-rows: auto auto auto;
          column-gap: 1em;
          /* row-gap: 1em;*/
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 0.75rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #fafafa;
        }

        .card-special {
          margin: 1rem;
          flex-basis: 45%;
          padding: 0.75rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #fce303;
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

        @media (max-width: 700px) {
          .grid {
            width: 100%;
            grid-template-columns: auto ;
            grid-template-rows: auto;
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
    </div >
  );
}
