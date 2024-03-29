import Head from "next/head";
import Layout from "../../components/layout";


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Workshops</title>
      </Head>
      
      <p className="event">
      <h1>Workshops Overview</h1>
        For its inaugural round, BROWSER commissioned 10 artists/web-developers
        (hereafter, simply 'artists'), premiered 5 new works and 1 existing work
        in an interactive online festival, and held 3 open workshops. Our 10
        commissioned artists were selected from an open call of 76 applications,
        received from all across the globe. This page is an archive of what have
        done.

      <h2>Workshops Pre-History</h2>
  
        We held 5 online group meetings which were open to the 76 people who
        submitted an application to BROWSER, as well as anyone else who asked to
        join. These meetings consisted of 1) workshops held by guest artists, 2)
        BROWSER's commissioned artists sharing the progress on their new works,
        and 3) collaborative planning and production of the BROWSER 2021 online
        festival.
        
        <p></p>
        <img src="/images/Jana-1.png" classname="image-test"></img>
        <p>Jana and Steffen presenting their work-in-progress</p>

      <h2>Workshop #1: Introductions and Commons</h2>
    
        The 10 commissioned artists each presented their individual work.
        Following that, they freely organized into the pairings that would
        create the 5 new collaborative works for BROWSER. These pairings became:{" "}
        <br /> <br />
        Jana de Troyer and Steffen Reichelt <br />
        Delia Ramos and Nikolay Suslov <br />
        Carla Tapparo and Rapo <br />
        Solomiya Moroz and Curt Miller <br />
        Zak Argabrite and Becky Brown <br />
        additionally, BROWSER selected Kevin K Lo to present his work at the
        BROWSER Festival. <br /> <br />
        The session ended with a google doc that all the participants filled
        with pieces and learning resources around the topic of web-based art. A
        Slack group was also created to facilitate ongoing discussions.

   
      

      <h2>Workshop #2: Laurens Inauen</h2>

      
        Laurens Inauen gave a lecture on generative music aesthetics, and
        presented a perspective on how web-based art is situated amidst
        contemporary music's legacy and discourse.

        <p></p>
        <img src="/images/Laurens-2.png" classname="image-test"></img>
        <p></p>
        <img src="/images/Laurens-1.png" classname="image-test"></img>
        <p></p>
        <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
      

      <h2>Workshop #3: Nicolas Zupfer</h2>

      
        Nicolas Zupfer presented his work in experimental graphic design and
        workshopped the artists' works-in-progress
        <p></p>
        <img src="/images/Nico-2.png" classname="image-test"></img>
        <p></p>
        <img src="/images/Nico-1.png" classname="image-test"></img>
        
      

      <h2>Workshop #4: Yotam Mann and Tone.js</h2>
      
        Yotam Mann gave an overview of tone.js, his framework for web audio API
        <p></p>
        <img src="/images/Yotam-3.png" classname="image-test"></img>
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
