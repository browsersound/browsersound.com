import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Web Audio Workshop</title>
      </Head>

      <p className="event">
        <h1>Web Audio for Non-Programmers</h1>
        Registration and details for our Workshop will be released soon. However, for now, please see this short description below.

      </p>

      <p className="event">
        <h2>Workshop</h2>
        <h4>6 Meetings</h4>
        <h4>Online - All Meetings at 17:00-19:00 CET / 11:00-1:00 EST</h4>
        <p className="event ul">Tuesday, June 6th</p>
        <p>Introducing Web Audio, p5.js, Loading and Controlling Sound Files, score-based audio control</p>
        <p className="event ul">Tuesday, June 13th</p>
        <p>Setting up a Workspace, Sound synthesis, audiovisual </p>
        <p className="event ul">Tuesday, June 20th</p>
        <p></p>
        <p className="event ul">Tuesday, June 27th</p>
        <p className="event ul">Tuesday, July 4th </p>
        <p className="event ul">Tuesday, July 11th</p>
        <p>
          Over the course of six zoom meetings, workshop participants will learn how to program audio in the web browser using the p5.js library.
        </p>

        <figure>
          <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
          <figcaption>Laurens Inauen's Workshop from Browser Sound 2021</figcaption>
        </figure>

      </p>


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
