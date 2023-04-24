import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Web Audio Workshop</title>
      </Head>

      <p className="event">
        <h1>Javascript for Sound Artists</h1>
        <h2>Register <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUKm7gud1Dj81DplIT8Cz-qpRWgIFbf3IF97cDQgc98PNRKQ/viewform?usp=sf_link">Here</a>
        </h2>
      </p>

      <p className="event">
        <h2>Workshop</h2>
        <p>These workshops are aimed for audiences with beginner/no-prior understanding of web programming. A major learning objective of these workshops is to equip you with fundamental tools and understanding of web programming, to kickstart a larger creative journey with the web.
        </p>
        <p> There is a registration fee for participation:</p>
        <p>Regular Fee - €22.50 Euro  / $25.00 USD (regular)</p>
        <p>Reduced Fee - €13.50 Euro / $5.25 (reduced)</p>
        <p>
          Reduced Fee is available, no questions asked, for students and anyone else for whom the regular fee is prohibitive.
        </p>
        <h4>6 Meetings</h4>
        <h4>Online - All Meetings at 17:00-19:00 CET / 11:00-1:00 EST</h4>
        <p className="event ul">Tuesday, June 6th</p>
        <p className="event ul">Tuesday, June 13th</p>
        <p className="event ul">Tuesday, June 20th</p>
        <p className="event ul">Tuesday, June 27th</p>
        <p className="event ul">Tuesday, July 4th </p>
        <p className="event ul">Tuesday, July 11th</p>
        <p>This is an intro to Javascript crash course designed for musicians and sound artists. Through 6 online meetings, participants are taught the basics of javascript through the lens of the p5.js library for creative coding. We will touch upon handling audio files and synthesizing sound in the web browser, creating an interactive web page, producing audio-synced visuals, and other topics that will set up a musician to begin creating sound art in the web browser. The workshops will culminate with a reading session at Location Sharing, Browser Sound’s 2023 festival. There, participants will present a final project, and have the option to have Browser Sound’s ensemble read through a performance of their work.
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



    </Layout >
  );
}
