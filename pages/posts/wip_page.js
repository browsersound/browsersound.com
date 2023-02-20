import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Page Forthcoming</title>
      </Head>
      
      <p className="event">
      <h1>The information for this page will be up soon.</h1>
        The information for this page is currently under construction. Please check back soon for updates, or join our <a href="https://www.brandonlincolnsnyder.com/email-reminder">email list</a> to be notified when such updates are launched.

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
