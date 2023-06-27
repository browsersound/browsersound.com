import Head from "next/head";
// import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Location Sharing: Events and Locations</title>
      </Head>

      <p className={styles.event}>
        <h1>Events and Locations</h1>

        <h4>Workshop: JavaScript for Sound Artists</h4>
        <h4>Live Concert</h4>
        <h4>Show and Tell Sessions (1 and 2)</h4>
        <h4>Final Presentations from Workshop</h4>


      </p>

      <div className={styles.event}>
        <h2>Workshop: Javascript for Sound Artists</h2>
        <h4>6 Meetings in June/July - 17:00-19:00 CET / 11:00-1:00 EST</h4>
        <h4>Online</h4>
        <p>
          Over the course of six zoom meetings, workshop participants will learn how to program audio in the web browser.
        </p>
        <h3>Read full information <a href="/posts/workshop_2023">here</a>.</h3>
        {/* <Image
          src="/images/Becky-Brown-01.png"
          width={600}
          height={400}
          layout="responsive"
        /> */}
        <figure>
          <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
          <figcaption>Laurens Inauen's Workshop from Browser Sound 2021</figcaption>
        </figure>

      </div>

      <div className={styles.event}>
        <h2>Concert</h2>

        <h4>July 21st - 19:00</h4>
        <h4><a href="https://www.kultur-kiosk.de/">Kultur Kiosk</a>, Stuttgart, Germany</h4>
        <h4>Online</h4>

        <p>4 world premieres. Hybrid music experienced both online and in-person.</p>

        <p>Music By:
          Brandon Lincoln Snyder, Ted Moore, Evelin Felix Lindberg, Steffen Reichelt, Becky Brown</p>

        <p>Performed by:
          Alex Waite, Jana De Troyer, Curt Miller</p>
        <figure>
          <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
          <figcaption>PACKETSPHERE: An Internet Travelogue, by Zak Argabrite and Becky Brown - A Browser Sound 2021 Commission.</figcaption>
        </figure>

      </div>

      <div className={styles.event}>
        <h2>Show-and-Tell</h2>
        <h4>July 22nd</h4>
        <h4>14:00 - 15:30 - Session 1</h4>
        <h4>16:00 - 17:30 - Session 2</h4>

        <h4><a href="https://www.kultur-kiosk.de/">Kultur Kiosk</a>, Stuttgart, Germany</h4>
        <h4>Online</h4>
        <p>
          Presentations by artists. Exchange feedback, and discover web-based resources for artists.
        </p>
        <p>Presentations by:
          scorefol.io, Brandon Lincoln Snyder, Ted Moore, Evelin Felix Lindberg, Steffen Reichelt, Becky Brown, ScoreCraft, WebSoundArt, and Jonathan Bell


        </p>
        {/* <Image
          src="/images/Dataplease - Jana De Troyer.gif"
          width={600}
          height={400}
          layout="responsive"
        /> */}

        <figure>
          <img src="/images/Dataplease - Jana De Troyer.gif" classname="image-test"></img>
          <figcaption>Data, please!, by Jana De Troyer and Steffen Reichelt - A Browser Sound 2021 Commission.</figcaption>
        </figure>




      </div>
      <div className={styles.event}>
        <h2>Reading Session</h2>
        <h4>July 22nd - 19:00</h4>
        <h4><a href="https://www.kultur-kiosk.de/">Kultur Kiosk</a>, Stuttgart, Germany</h4>
        <h4>Online</h4>

        <p>
          Final project presentations from our workshop “JavaScript for Sound Artists”

        </p>


        {/* <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter> */}
        <figure>
          <img src="https://media.giphy.com/media/x5eJCbjGVoYGP1hMzj/giphy.gif" classname="image-test"></img>
          <figcaption>vyshyvanka.js, by Solomiya Moroz and Curt Miller - A Browser Sound 2021 Commission.</figcaption>
        </figure>


      </div>


      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
