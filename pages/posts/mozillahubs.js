import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Online Festival</title>
      </Head>
      <p className="event">
      <h1>Online Festival Grounds</h1>
      <p>
        BROWSER's 3-day festival will take place in virtual reality. Bookmark
        this page, and come back on June 11th to experience the program live
        with other online avatars.
      </p>
      </p>
      <div className="event">
      <h2>Friday June 11th</h2>
        Open Gallery - all day <br /> interactive and installative works
      </div>
      
      <div className="event">
      <h2>Saturday June 12th</h2>
        <h3>EVENT 1: 7:00-8:30pm (CEST) / 10:00-12:30am (PDT)</h3>
        <p>Premiere and Presentation of New Works by:</p>
        <ul>
          <li>Delia Ramos Rodríguez + Nikolay Suslov</li>
          <li>Jana De Troyer + Steffen Reichelt</li>
          <li>Carla Tapparo + Rapo Francisco</li>
        </ul>
        <p>Open Gallery - all day</p>
      </div>
      <div className="event">
        <h2>Sunday June 13th</h2>
        <h3>EVENT 2: 7:00-8:30pm (CEST) / 10:00-12:30am (PDT)</h3>
        <p>Premiere and Presentation of New Works by:</p>
        <ul>
          <li>Solomiya Moroz + Curt Miller</li>
          <li>Zak Argabrite + Becky Brown</li>
          <li>Kevin CK Lo</li>
        </ul>
        <p>Open Gallery - all day</p>
        </div>

        <div className="event">
        <ul>
          <li>Work by Brandon Lincoln Snyder + Christian Espinosa 
            Schatz + Ethan Lee + Henry Sales also exhibited in 
            the open gallery</li>
        </ul>
      </div>

      <style jsx>{`
        .event {
          margin: 20px 0;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }
        .event ul {
          padding: 0;
          padding-left: 1em;
          margin: 0;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }
        .event ul li {
          list-style: none;
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
        }
      `}</style>
    </Layout>
  );
}
