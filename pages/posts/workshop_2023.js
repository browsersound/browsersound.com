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
      Details for our Workshop will be released soon. However, for now, please see this short description below.

      </p>

      <p className="event">
        <h2>Workshop</h2>
        <h4>6 Meetings in June/July - Specific Times TBA</h4>
        <h4>Online</h4>
        <p>
        Over the course of six 90-minute zoom meetings, workshop participants will learn how to program audio in the web browser using the p5.js library. 
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
