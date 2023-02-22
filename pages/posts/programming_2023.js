import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Location Sharing: Events and Locations</title>
      </Head>
      
      <p className="event">
      <h1>Events and Locations</h1>
        Location Sharing will consist of four main events: A 6-part coding workshop (online only), a concert, a show-and-tell meetup, and a reading session (the latter three are in-person & online)

        <div className={styles.event}>
        <h2>Workshop</h2>
        <h3>6 Meetings in June/July - Specific Times TBA</h3>
        <h3>Online</h3>
        <p>
          Description about Workshop

          Level
          Zoom
          p5.js

         
        </p>

        
        <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
      
      </div>

      <div className={styles.event}>
        <h2>Concert</h2>
        <h3>July </h3>
        <h3><a href="https://www.kultur-kiosk.de/">Kultur Kiosk</a>, Stuttgart, Germany & Online</h3>
        <p>
          Description about Concert
         
        </p>
        <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
      </div>


      <div className={styles.event}>
        <h2>Show-and-Tell</h2>
        <h3>July </h3>
        <h3>Stuttgart, Germany & Online</h3>
        <p>
          Description about Show and Tell
         
        </p>
         <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
      </div>

      <div className={styles.event}>
        <h2>Reading Session</h2>
        <h3>July </h3>
        <h3>Stuttgart, Germany & Online</h3>
        <p>
          Description about Reading Session
         
        </p>
         <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
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

        .image-test {
          margin-top: 10px;
        }
      `}</style>



    </Layout>
  );
}
