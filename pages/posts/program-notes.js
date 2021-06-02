import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Festival Proceedings</title>
      </Head>

      <p className={styles.event}>
        <h1>BROWSER's Featured Works</h1>
        These new works for web browser were created over the course of 4 months
        in tandem with several workshops. An overview of our workshop phase can
        be found
        <a href="/posts/about"> here</a>.
      </p>

      <div className={styles.event}>
        <h2>PACKETSPHERE: An Internet Travelogue</h2>
        <h3>Zak Argabrite and Becky Brown</h3>
        <p>
          What does it take to send a single message halfway around the globe?
          What issues exist in the technological world just below the surface of
          your keyboard? Come join Zak, Becky, and a colorful cast of digital
          characters for a look into the grand tour you initiate every time you
          send a phrase as simple as "hello."
        </p>
        <Image
          src="/images/600x400.png"
          width={600}
          height={400}
          layout="responsive"
        />
        <img src="/images/600x400.png" className="image-test" />
      </div>

      <div className={styles.event}>
        <h2>THIS IS NOT A CONCERT</h2>
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
          For implementation we used Open Source frameworks for Web Browser,
          especially LiveCoding.space SDK. During the development of the project
          we implemented multi-user synchronization support for several open
          source frameworks across web browsers: multi-user 2D canvas in Two.js,
          synchronized Transport object in Tone.js. Also backported a video
          synchronization solution from Croquet V onto Virtual World Framework.
          We used MediaPipe and Hand.js for offline extracting of the body
          motion from the video performance. The project can be built from the
          source code and run locally without the need of Internet connection,
          as it has no dependencies on any cloud services. The source code is
          available on the project site.
        </p>
      </div>

      <div className={styles.event}>
        <h2>Data, please!</h2>
        <h3>Jana De Troyer and Steffen Reichelt</h3>
        <p>
          Our online behavior is subject to marketing mechanisms. Clicks, likes,
          watch time… are transformed into algorithms, and constantly monitored
          and updated in order to upkeep personalised content and user
          engagement. The retrieved information is then monetized through
          targeted advertising.
        </p>
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
          In a playful way, De Troyer and Reichelt explore the possibility of
          webcam-based user tracking with the interactive audiovisual
          installation »Data, please!« They invite the visitors to engage with
          their body data in the digital space.
        </p>
      </div>
      <div className={styles.event}>
        <h2>ANTI - A Netart Theory of Identity</h2>
        <h3>Carla and Rapo</h3>

        <p>[Information coming soon]</p>
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
          For the current iteration of the instrumental interface, we chose to
          focus on the star that combines a few shapes like superimposed
          crosses, forming eight triangle shapes within a square. The star to us
          represents an energy field that is both radiant and threatening as a
          magical ethereal body composed of combustible gas materials. In the
          interface, this energy is represented by a combination of note
          patterns sonified through different synths in Tone.js.
        </p>
        <p>
          We took inspiration from Tom Johnson’s illustrated music in which he
          signifies different \geometrical shapes by calculating repeatable note
          instances for different triangles, squares and block patterns. In the
          star shape, the triangles and squares use the repeating patterns
          centred around D Dorian and C Aeolian modes. These modes are
          representative of early Ukrainian traditional music. Thus the driving
          energy of the repeatable patterns with geometrical considerations for
          repeatability of certain notes within a D Dorian mode through Tone.js
          synths patterns and sequences is what the user mostly hears when
          interacting with the star-shaped instrumental interface. The interface
          is designed with delay, reverb, pitch-shift up and down at each corner
          of the star diamond. Also, one can change the velocity and volume of
          the patterns by clicking on four black corners of the star design.
        </p>
      </div>

      <div className={styles.event}>
        <h2>Return of the Eye</h2>
        <h3>Kevin CK Lo</h3>
        <p>[Information coming soon]</p>
      </div>

      <div className={styles.event}>
        <h2>Firewood, Corn, Weaving</h2>
        <h3>
          Brandon Lincoln Snyder, Christian Espinosa Schatz, Henry Sales, and
          Ethan Lee
        </h3>

        <p>[Information coming soon]</p>
      </div>

      <style jsx>{`
        .image-test {
          margin-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
