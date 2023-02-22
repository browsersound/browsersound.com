import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Location Sharing: Events and Locations</title>
      </Head>

      <p className={styles.event}>
        <h1>Events and Locations</h1>

        Location Sharing will consist of four main events: A 6-part coding workshop (online only), a concert, a show-and-tell meetup, and a reading session (the latter three are in-person & online)
      
      </p>

      <div className={styles.event}>
        <h2>Workshop</h2>
        <h4>6 Meetings in June/July - Specific Times TBA</h4>
        <h4>Online</h4>
        <p>
        Over the course of six 90-minute zoom meetings, workshop participants will learn how to program audio in the web browser using the p5.js library. 
         
        </p>
        {/* <Image
          src="/images/Becky-Brown-01.png"
          width={600}
          height={400}
          layout="responsive"
        /> */}
        <figure> 
        <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
         <figcaption>Laurens Inauen's Workshop from Browser Sound 2021</figcaption>
         </figure>
      
      </div>

      <div className={styles.event}>
        <h2>Concert</h2>
         
        <h4>July 21st (Evening)</h4>
        <h4><a href="https://www.kultur-kiosk.de/">Kultur Kiosk</a>, Stuttgart, Germany</h4>
        <h4>Online</h4>

        <p>
         A concert of new works that exist simulatneously online and in-person. A hybrid ensemble of in-person and remote musicians and coders will premiere the new works. 
        </p>
        <p> 
        One of these works will be commisioned from our call for porposals. <a href="https://drive.google.com/file/d/1Fzy4We9CXB0LP2f2ZRRGp3sflmzHcK3i/view?usp=sharing">Submit here</a>.
        </p>

        <figure> 
        <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
         <figcaption>PACKETSPHERE: An Internet Travelogue, by Zak Argabrite and Becky Brown - A Browser Sound 2021 Commission.</figcaption>
         </figure>
        
      </div>

      <div className={styles.event}>
        <h2>Show-and-Tell</h2>
        <h4>July 22nd (Afternoon) </h4>
        <h4>Stuttgart, Germany</h4>
        <h4>Online</h4>
        <p>
          For an afternoon, artists will give presentations of their works. Open for any artist to contribute. Registration link forthcoming. This is an opportuntiy for the community to share with one another what they have been working on, and to be inspired by one another.
        </p>
        {/* <Image
          src="/images/Dataplease - Jana De Troyer.gif"
          width={600}
          height={400}
          layout="responsive"
        /> */}

        <figure> 
        <img src="/images/Dataplease - Jana De Troyer.gif" classname="image-test"></img>
         <figcaption>Data, please!, by Jana De Troyer and Steffen Reichelt - A Browser Sound 2021 Commission.</figcaption>
         </figure>
        


    
      </div>
      <div className={styles.event}>
        <h2>Reading Session</h2>
        <h4>July 22nd Evening</h4>
        <h4>Stuttgart, Germany</h4>
        <h4>Online</h4>
          
        <p>
        Participants of the workshop will present a final project in the format of an informal concert / show-and-tell. Participants will have the opportunity to work with Browser Sound's hybrid ensemble of in-person and remote musicians/coders.
        </p>
      
        
          {/* <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter> */}
        <figure> 
        <img src="https://media.giphy.com/media/x5eJCbjGVoYGP1hMzj/giphy.gif" classname="image-test"></img>
         <figcaption>vyshyvanka.js, by Solomiya Moroz and Curt Miller - A Browser Sound 2021 Commission.</figcaption>
         </figure>
        
      
      </div>


      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
