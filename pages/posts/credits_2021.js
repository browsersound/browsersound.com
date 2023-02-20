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
        <title>Credits</title>
      </Head>

      <p className={styles.event}>
        <h1>BROWSER: Who We Are</h1>
        <p>
          BROWSER is a personal project of mine, run in cooperation with the Stuttgarter Kollektiv für Aktuelle Musik.
          My short term goal is to use techniques of collaboration common in the contemporary music and the web developer worlds
          in order to bring webbased art to more people (and more people to webbased art). In the long term, I hope
          that webbased art becomes as common as any instrument or medium in the contemporary music world. 
          <ul>-Brandon Lincoln Snyder (Stuttgart; June, 2021)</ul>
        </p>
        <p>Please send any comments and feedback to browserwebmusic@gmail.com</p>
      </p>

      <div className={styles.event}>
        <h2>Who and What</h2>
        <p>
          Director <br/>
          <ul>Brandon Lincoln Snyder</ul>
          Board Members<br/>
          <ul>Nikola Lutz, and Brandon Lincoln Snyder<br/></ul>
          Commisioning Jury
          <ul>Nikola Lutz, Laurens Inauen, Dan Tramte, Nicolas Zupfer, and Brandon Lincoln Snyder<br/></ul>
          Guest Workshops 
          <ul>Laurens Inauen, Nicolas Zupfer, and Yotam Mann<br/></ul>
          Financial Support from 
          <ul>Stuttgarter Kollektiv für Aktuelle Musik <br/>
          Hochschule für Musik und Darstellende Kunst Stuttgart<br/></ul>
          <p></p>
          BROWSER 2021 featured artists:<br/>
          <ul><li>
          Jana De Troyer<br/>
          Curt Miller<br/>
          Solomiya Moroz<br/>
          Delia Ramos Rodríguez<br/>
          Zak Argabrite<br/>
          Becky Brown<br/>
          Nikolay Suslov<br/>
          Carla Tapparo<br/>
          Rapo Francisco<br/>
          Steffen Reichelt<br/>
          Kevin CK Lo<br/>
          </li></ul>

          <p></p>
          Big thank you to Steffen Reichelt, Curt Miller, and Ethan Lee, who taught me how to built this website. 
          Thank you Jana De Troyer for the big help with marketing BROWSER2021. Thank you to Simone Enge and the 
          Hochschule für Musikand Darstellende Kunst for being the first financial supporters of this project.
          Thank you again, Nikola, for your wisdom and support. You helped make this first instance of BROWSER run 
          incredibly well. Thank you Ethan Lee for introducing me to web-based music.
        </p>
    
      
      </div>

      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }


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
