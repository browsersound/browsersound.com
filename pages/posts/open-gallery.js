import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Open Gallery</title>
      </Head>
      <p className={styles.event}>
        <h1>Open Gallery</h1>
        View our seven featured works here, and join us for a live discussion at the zoom link below
      </p>

      <div className="grid-container">
        <a href="https://us02web.zoom.us/j/81409840119?pwd=ZVd6dXVUWDdVUjNMQ1g4aHloMFJydz09" className="event yellow" > <p>
          <h4>Live Discussion - Zoom </h4>
          19:00 CEST<br/>Saturday and Sunday <br/>(12.07.21 and 13.07.21)
          <img src="/images/ZoomRoom-1.png" classname="image-test"></img>
        </p>
        </a>

        <a className="event" href="http://bit.ly/packetsphere">
          <h4>PACKETSPHERE: An Internet Travelogue</h4>
          <p>Zak Argabrite and Becky Brown</p>
          <img src="/images/Becky-Brown-01.png" classname="image-test"></img>
        </a>
        <a href="https://concert.livecoding.space" className="event">
          <h4>THIS IS NOT A CONCERT</h4>
          <p>Delia Ramos Rodríguez and Nikolay Suslov</p>
          <img src="/images/bowing.jpg" classname="image-test"></img>
        </a>
        <a href="https://dataplease.steffenreichelt.de/" className="event">
          <h4>Data, please!</h4>
          <p>Jana De Troyer and Steffen Reichelt</p>

          <img src="/images/Dataplease-01.png" classname="image-test"></img>
        </a>
        <a href="https://anti-a-netart-theory-of-identity.gitlab.io/init-1/" className="event">
          <h4>ANTI - A Netart Theory of Identity</h4>
          <p>Carla and Rapo</p>

          <img src="/images/anti - rapofran.jpg" classname="image-test"></img>
        </a>
        <a href="https://cloacaprojects.com/returntheeye/" className="event">
          <h4>Return the Eye - retrospective and futures</h4>
          <p>Kevin CK Lo</p>
          <img src="/images/rte-3.png" classname="image-test"></img>
        </a>

        <a href="https://vyshyvanka-js.com/" className="event">
          <h4>Vyshyvanka.js</h4>
          <p>Solomiya Moroz and Curt Miller</p>
          <img src="/images/StarInterface.png" classname="image-test"></img>
        </a>

        <a href="https://browsersound.com/posts/firewood-corn-weaving" className="event">
          <h4>Firewood Corn Weaving - decolonizing ethnoclimatology and indigenizing climate change</h4>
          <p>Brandon Lincoln Snyder, Christian Espinosa Schatz, Henry Sales, and Ethan Lee</p>
          <img src="/images/firewood.png" classname="image-test" ></img>
        </a>
      </div>

      <div className={styles.event}>
        <h1>Program Notes</h1>
        These new works for web browser were created over the course of 4 months
        in tandem with several workshops. An overview of our workshop phase can
        be found
        <a href="/posts/about"> HERE</a>
        <p> View source code for each project on our <a href="https://github.com/BrowserMusic"> Github</a>.</p>
        <p> *a commision from BROWSER2021 </p>
      </div>

      <div className={styles.event}>
        <h2>PACKETSPHERE: An Internet Travelogue*</h2>
        <h3>Zak Argabrite and Becky Brown</h3>
        <p>
          What does it take to send a single message halfway around the globe?
          What issues exist in the technological world just below the surface of
          your keyboard? Come join Zak, Becky, and a colorful cast of digital
          characters for a look into the grand tour you initiate every time you
          send a phrase as simple as "hello."
        </p>
        <img src="/images/Becky-Brown-01.png" classname="image-test"></img>

        <p></p>
        <img src="/images/Becky-Brown-02.png" classname="image-test"></img>

      </div>

      <div className={styles.event}>
        <h2>THIS IS NOT A CONCERT*</h2>
        <h3>Delia Ramos Rodríguez and Nikolay Suslov</h3>
        <p>
          Another perspective to what we normally (don't) see. The bowing after
          coming to the stage; the tuning of the instrument; the playing itself;
          the applause (?).{" "}
        </p>
        <p> As always, but different. </p>
        <p>
          {" "}
          The art work is presented in the form of interactive, multi-user,
          collaborative p2p web application. Application can be run on any
          desktop or mobile Web Browser. The audience collaboratively explores
          the artwork inside virtual canvas space within multi-contextual /
          conceptual creative layers by touching the virtual objects. These
          layers are not visible by default. Interaction is based on applying or
          viewing through some sort of "filters" (augmenting reality in virtual
          reality). Several participants can personally or collaboratively
          explore the hidden layers, as well as experimenting with the artwork
          through these layers without breaking the original artwork.
        </p>
        <p>
          For implementation, Nikolay and Delia used Open Source frameworks for Web Browser,
          especially LiveCoding.space SDK. During the development of the project
          they implemented multi-user synchronization support for several open
          source frameworks across web browsers: multi-user 2D canvas in Two.js,
          synchronized Transport object in Tone.js. They also backported a video
          synchronization solution from Croquet V onto Virtual World Framework.
          MediaPipe and Hand.js were used for offline extracting of the body
          motion from the video performance. The project can be built from the
          source code and run locally without the need of internet connection,
          as it has no dependencies on any cloud services. The source code is
          available on the project site.
        </p>
        {/* <img src="/images/trailer-02-trim-02.gif" classname="image-test"></img> */}

      </div>

      <div className={styles.event}>
        <h2>Data, please!*</h2>
        <h3>Jana De Troyer and Steffen Reichelt</h3>
        <p>
          Our online behavior is subject to marketing mechanisms. Clicks, likes,
          watch time… are transformed into algorithms, and constantly monitored
          and updated in order to upkeep personalised content and user
          engagement. The retrieved information is then monetized through
          targeted advertising.
        </p>
        {/* <Image
          src="/images/Dataplease - Jana De Troyer.gif"
          width={600}
          height={400}
          layout="responsive"
        /> */}
        <img src="/images/Dataplease - Jana De Troyer.gif" classname="image-test"></img>
        <p>
          Meanwhile, most people’s webcam usage has risen exponentially. We open
          our cameras through video conferences, live streams and the capture of
          our daily lives in “stories”. Intimate personal details like our
          living rooms and facial expressions are shared with our online
          community, but we easily lose sight of the processing chain our images
          travel through from one device to the other.
        </p>
        <p>
          Actively accessing this feed could provide cooperations with a wealth
          of new information, ready to be fed to their algorithms. Could this be
          the next step in the growth of the hungry data machines? And, where do
          we as individuals draw the line?
        </p>

        <p>
          In a playful way, Jana and Steffen explore the possibility of
          webcam-based user tracking with the interactive audiovisual
          installation »Data, please!« They invite the visitors to engage with
          their body data in the digital space.
        </p>

        {/* <Image
          src="/images/Dataplease-01.png"
          width={600}
          height={400}
          layout="responsive"
        /> */}
        <img src="/images/Dataplease-01.png" classname="image-test"></img>
      </div>
      <div className={styles.event}>
        <h2>ANTI - A Netart Theory of Identity*</h2>
        <h3>Carla and Rapo</h3>

        <p><code>
          &lt;title&gt;ANTI - A Netart Theory of Identity&lt;/title&gt;</code></p>
        <p><code>
          &lt;script type="text/performance"&gt; Carla & Rapo &lt;onclick="perform();"&gt;</code></p>
        <p><code>
          &lt;p&gt;they will and will not coexist. In this poetic encounter they are interested in
          empathizing with the &lt;body&gt; of the internet, using &lt;rhythms&gt; and texts from
          &lt;sources&gt; they are interested-in to un-draw the limits and &lt;perceptions&gt; of
            identities&lt;/p&gt;</code></p>
        <p><code>
          &lt;p&gt;they would use &lt;sampling&gt; techniques and build a sound-collage to de-automatize
          the perceptual organization of the &lt;medium&gt;, as well as the struggling and underlying
            ideologies beneath&lt;/p&gt;</code></p>
        <p><code>
          &lt;p&gt;this will be an on-line-real-time-improvised-performance&lt;/p&gt;</code></p>
        <p><code>
          &lt;p&gt;and will be the first time the artists will perform together as a continuation of a
            dialogue that started years ago when they met in a remote place from planet earth&lt;/p&gt;</code></p>
        <p><code>
          &lt;/script&gt;</code></p>


        {/* <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter> */}

        <img src="/images/anti - rapofran.jpg" classname="image-test"></img>

      </div>

      <div className={styles.event}>
        <h2>Vyshyvanka.js</h2>
        <h3>Solomiya Moroz and Curt Miller</h3>
        <p>
          Vyshyvanka.js is a cross-stitch embroidery interface for drawing and
          editing embroidery patterns and an instrumental interface that
          sonifies embroidery patterns through mouse click interactions.
          Vyshyvanka is a name for a traditional embroidered Ukrainian shirt
          with distinctive patterns that vary by region and carry meanings that
          range from narrative to spiritual and mythological, acting as
          protective talismans for the wearer. Users of Vyshyvanka.js can use
          the examples on the site for inspiration and attempt to draw their own
          patterns in addition to interacting with the sound interface we have
          created.
        </p>
        <p>
          For the current iteration of the instrumental interface, Solomiya and Curt chose to
          focus on the star that combines a few shapes like superimposed
          crosses, forming eight triangle shapes within a square. The star to us
          represents an energy field that is both radiant and threatening as a
          magical ethereal body composed of combustible gas materials. In the
          interface, this energy is represented by a combination of note
          patterns sonified through different synths in Tone.js.
        </p>
    
        <img src="https://media.giphy.com/media/x5eJCbjGVoYGP1hMzj/giphy.gif" classname="image-test"></img>
        <p>
          The interface
          is designed with delay, reverb, pitch-shift up and down at each corner
          of the star diamond. Also, one can change the velocity and volume of
          the patterns by clicking on four black corners of the star design.
        </p>
      </div>

      <div className={styles.event}>
        <h2>Return the Eye - retrospective and futures</h2>
        <h3>Kevin CK Lo</h3>
        <p>Kevin will summarize Return the Eye, an online exhibit presented by Cloaca Projects (SF) that
        ran December 2020 through February 2021. This work telematically joined viewers in controlling
        three cameras to view in situ art pieces, which considered visibility, the elastic ontology of
        virtual images, and the weaponization of optical technologies. Viewers' user data and interaction
        with the website collaboratively shaped the long form generative composition. This was a way to
          make music together during the pandemic.</p>
        <img src="/images/rte-1-Kevin Lo.gif" classname="image-test"></img>
        <p></p>
        <img src="/images/rte-2-Kevin Lo.gif" classname="image-test"></img>

        <p>This work was also bookended by two live performances, each with two differing modes of audience
        interaction. Kevin will speak and present to the second of these, with audience participation
          (clicks, mouse movements, and such) as a part of shaping the presentation.</p>

        <img src="/images/rte-3.png" classname="image-test"></img>
      </div>

      <div className={styles.event}>
        <h2>Firewood Corn Weaving - decolonizing ethnoclimatology and indigenizing climate change</h2>
        <h3>Brandon Lincoln Snyder, Christian Espinosa Schatz, Henry Sales, and Ethan Lee</h3>

        <p>Firewood Corn Weaving is a mobile web experience that pieces together videos,
        made by Mayan interlocutors from the Guatemalan highlands about their daily lives,
          with interactive texts dwelling on themes of weather, climate, abstraction, and translation.  </p>

        <img src="/images/trailer-02-trim-02.gif" classname="image-test"></img>

      </div>

      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }

        .grid-container{
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: auto;
          column-gap: 1em;
          row-gap: 1em;
        }

        @media (max-width: 600px) {
        .grid-container{
          display:grid;
          grid-template-columns: auto;
          grid-template-rows: auto;
          column-gap: 1em;
          row-gap: 1em;
        }
        }

        .event {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .event:hover,
        .event:focus,
        .event:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .yellow{
          background: #ffe263;
        }

      `}</style>
    </Layout >
  );
}