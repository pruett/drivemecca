import Head from "next/head";
import styles from "../../styles/Apply.module.css";

export default function Apply() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apply for a position</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Congrats!</h1>
        <div>
          <p>
            We'll let you know when our online application is ready! If you are
            eager to start the process, feel free to download the .pdf below
          </p>
        </div>
        <div>
          <code>Provide link to download .pdf here</code>
        </div>
      </main>
    </div>
  );
}
