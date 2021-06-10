import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Firewood Corn Weaving</title>
      </Head>
      <p className="event">
      <h1>Firewood Corn Weaving - decolonizing ethnoclimatology and indigenizing climate change</h1>
      <p>
          This project is a mobile web experience that pieces together videos 
          made by Mayan interlocutors from the Guatemalan highlands about their daily lives 
          with interactive texts dwelling on themes of weather, climate, abstraction, and translation.
      </p>

      <p>
          Experience the project from a mobile web browser at: <code>firewoodcornweaving.app</code>
      </p>
      </p>
      <div className="event">
      <p>
          Christian Espinosa Schatz presents the methodology behind the project for 
          the University of Pennsylvania's EnviroLab conference on "Placing: New 
          Engagements with the Environment"
          <ul>
        <li><a href="https://vimeo.com/521241474"> (Dis)placing the Weather: Decolonizing ethnoclimatology and indigenizing climate change</a>.</li>
          </ul>
      </p>

    
      <p>
          Ethan Lee speaks here on his role in the project as web developer.
          <ul>
        <li><a href="https://youtu.be/vkiynR9MSkg"> The making of Firewood, Corn, Weaving</a>.</li>
          </ul>
      </p>
      </div>

      <div className="event">
        <p>Created by:</p>
        <ul>
        <li>Hermenegildo Godinez Jacinto, Video Director, Camera</li>
        <li>Silverio Osbaldo Claudio, Video Director, Video Participant (Firewood)</li>
        <li>Ana Aguilar, Video Participant (Corn), Camera</li>
        <li>Javier Garcia, Video Participant (Corn)</li>
        <li>Elizandro Sales, Video Director, Camera</li>
        <li>Mario Jacinto, Video Director, Camrea</li>
        <li>Silvia Lucrecia Carrillo, Video Director, Video Participant (Weaving), Camera, Translation and Transcription</li>
        <li>Brandon Lincoln Snyder Artistic Director, Web Design </li>
        <li>Christian Espinosa Schatz Artistic Director, Text</li>
        <li>Henry Sales, Artistic Director, Translation</li>  
        <li>Ethan Lee, Web Development, Web Design</li>
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
