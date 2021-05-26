import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Livestream</title>
      </Head>
      <h1>Livestream</h1>
      <p>
        Experience a conventional livestream of BROWSER's 3-day festival here.
        The interactive components of the new works will be observed through the
        POV of another user.
      </p>
      <h2>Friday June 11th</h2>
      <p className="event">
        Open Gallery - all day <br /> interactive and installative works
      </p>
      <h2>Saturday June 12th</h2>
      <div className="event">
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

      <style jsx>{`
        .event {
          margin: 20px 0;
        }
        .event ul {
          padding: 0;
          padding-left: 1em;
          margin: 0;
        }
        .event ul li {
          list-style: none;
        }
      `}</style>
    </Layout>
  );
}
