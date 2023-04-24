import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Javascript for Sound Artists</title>
      </Head>

      <p className="event">
        <h1>Javascript for Sound Artists</h1>
        <h2>Register <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUKm7gud1Dj81DplIT8Cz-qpRWgIFbf3IF97cDQgc98PNRKQ/viewform?usp=sf_link">Here</a>
        </h2>
      </p>

      <p className="event">
        <h2>Workshop</h2>
        <h3>Description</h3>
        <p>This is an intro to Javascript crash course designed for musicians and sound artists.
          Through six synchronous, online meetings, participants are taught the basics of javascript through
          the lens of the p5.js library for creative coding. We will touch upon handling audio files and
          synthesizing sound in the web browser, creating an interactive web page, producing audio-synced
          visuals, and other topics that will set up a musician to begin creating sound art in the web browser.
          <em>The workshops will culminate with a reading session at Location Sharing, Browser Sound’s 2023 festival.
            There, participants will present a final project, and have the option to have Browser Sound’s ensemble read through
            a performance of their work.</em>
        </p>
        <p><strong>These workshops are aimed for audiences with beginner/no-prior understanding of web programming. </strong>A major learning objective of these workshops is to equip you with fundamental tools and understanding of web programming, to kickstart a larger creative journey with the web.
        </p>

      </p>

      <p className="event">
        <h3>Registration</h3>
        <p>Regular Fee - €22.50 Euro  / $25.00 USD</p>
        <p>Reduced Fee - €13.50 Euro / $15.00 USD </p>

        <p>
          <em>Reduced Fee is available, no questions asked, for students and anyone else for whom the regular fee is prohibitive. If the reduced fee is prohibitive, send an email to browserwebmusic@gmail.com.</em>
        </p>
        <p>
          All workshop communications will occur via email from browserwebmusic@gmail.com. A join link to each meeting will be
          sent one day prior to each meeting.
        </p>
        <p>Register <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUKm7gud1Dj81DplIT8Cz-qpRWgIFbf3IF97cDQgc98PNRKQ/viewform?usp=sf_link">Here</a></p>
      </p>
      <p className="event">
        <h3>Time</h3>
        <h4>This workshop will take place across six online meetings</h4>
        <h4>All Meetings at 17:00-19:00 CET / 11:00-1:00 EST</h4>
        <p className="event ul">Tuesday, June 6th</p>
        <p className="event ul">Tuesday, June 13th</p>
        <p className="event ul">Tuesday, June 20th</p>
        <p className="event ul">Tuesday, June 27th</p>
        <p className="event ul">Tuesday, July 4th </p>
        <p className="event ul">Tuesday, July 11th</p>
      </p>
      <p className="event">
        <p>
          This workshop will be taught by <a href="https://www.brandonlincolnsnyder.com/">Brandon Lincoln Snyder</a>, and is produced in partnership with WebSoundArt, a community dedicated to web-based sound art.
        </p>


        <figure>
          <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
          <figcaption>Laurens Inauen's Workshop from Browser Sound 2021</figcaption>
        </figure>

      </p>

      <p className="event">
        <h2>FAQ</h2>
        <h4>Is it mandatory to attend all six sessions?</h4>
        <p>It is recommended to attend all six sessions, as each session will build off of the previous one.
          However, there is no penalty for missing sessions.</p>
        <h4>Will the sessions be recorded? Can a session be viewed afterwards?</h4>
        <p>A session recording can be provided for a registered participant upon request. These
          recordings will be granted in the case that the participant cannot attend a certain meeting time, or that
          a recorded session would be helpful for their learning of the material.
          The recordings are not available as a complete substitute for attending the online sessions.</p>
        <h4>What materials do I need? What is provided?</h4>
        <p>A computer with an internet connection is required. Supplemental materials (code, audio files, other notes) will be provided along with each session.</p>
        <h4>I have other questions!</h4>
        <p>Send an email to browserwebmusic@gmail.com and let's work it out!</p>
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
