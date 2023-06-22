import Head from "next/head";
// import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>something</title>
      </Head>

      <p className={styles.event}>
        <a href="https://docs.google.com/document/d/15POFrn94IbJjnXgvh-pO6SV8daYrUzbH1xx-4xC7Gb4/edit?usp=sharing">something</a> <--click here

      </p>



      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
