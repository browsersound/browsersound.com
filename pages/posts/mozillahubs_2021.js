import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Opens Friday June 11th</title>
      </Head>
      <p className="event">
      <h1>Open on Friday June 11th</h1>
      <p>
        See our scheduled programming:
      </p>
      </p>
      <div className="event">
      <h2>Friday June 11th</h2>
        <h3>Open Gallery - all day </h3>
        <p>View the project in our <a href="https://hubs.mozilla.com/Dg5GJC3/browser-2021-festival/"> VR space </a> 
        or on <a href="/posts/open-gallery"> our website</a>.</p>
      </div>
      
      <div className="event">
      <h2>Saturday June 12th</h2>
        <h3>EVENT 1: 7:00-8:30pm (CEST) / 10:00am-12:30pm (PDT)</h3>
        <p><a href="https://us02web.zoom.us/j/81409840119?pwd=ZVd6dXVUWDdVUjNMQ1g4aHloMFJydz09"> Over ZOOM</a>
        : Premiere and Presentation of New Works by:</p>
        <ul>
          <li>Jana De Troyer + Steffen Reichelt<br />Data, please!</li>
          <li>Carla Tapparo + Rapo Francisco<br />ANTI - A Netart Theory of Identity</li>
          <li>Brandon Lincoln Snyder + Nikola Lutz <br />(presenting BROWSER as a whole)</li>
          <li>Delia Ramos Rodríguez + Nikolay Suslov<br />THIS IS NOT A CONCERT</li>
        </ul>
        <h3>EVENT 2: 8:30-9:30pm (CEST) / 12:30-1:30pm (PDT)</h3>
        <p><a href="https://www.twitch.tv/browsersound"> Over LIVESTREAM</a>
        : Post-presentation twitch stream from Zak Argabrite</p>
        <h3>Open Gallery - all day </h3>
        <p>View the project in our <a href="https://hubs.mozilla.com/Dg5GJC3/browser-2021-festival/"> VR space </a> 
        or on <a href="/posts/open-gallery"> our website</a>.</p>
      </div>
      <div className="event">
        <h2>Sunday June 13th</h2>
        <h3>EVENT 3: 7:00-8:30pm (CEST) / 10:00am-12:30pm (PDT)</h3>
        <p><a href="https://us02web.zoom.us/j/81409840119?pwd=ZVd6dXVUWDdVUjNMQ1g4aHloMFJydz09"> Over ZOOM</a>
        : Premiere and Presentation of New Works by:</p>
        <ul>
          <li>Solomiya Moroz + Curt Miller<br/>Vyshyvanka.js</li>
          <li>Zak Argabrite + Becky Brown<br/>PACKETSPHERE: An Internet Travelogue</li>
          <li>Brandon Lincoln Snyder + Workshop Participants<br />(presenting the BROWSER workshops)</li>
          <li>Kevin CK Lo<br/>Return the Eye - retrospective and futures</li>
        </ul>
        <h3>EVENT 4: 8:30-9:30pm (CEST) / 12:30-1:30pm (PDT)</h3>
        <p><a href="https://www.twitch.tv/browsersound"> Over LIVESTREAM</a>
        : Post-presentation twitch stream from Brandon Lincoln Snyder</p>
        <h3>Open Gallery - all day </h3>
        <p>View the project in our <a href="https://hubs.mozilla.com/Dg5GJC3/browser-2021-festival/"> VR space </a> 
        or on <a href="/posts/open-gallery"> our website</a>.</p>
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
