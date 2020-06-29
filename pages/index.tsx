import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drive for Mecca Trucking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Drive for <a href="http://www.meccatrucking.com">Mecca Trucking</a>
        </h1>

        <p className={styles.description}>
          Get started by filling out the short form below
        </p>

        <div className={styles.grid}>
          <input type="text" placeholder="Full name"></input>
          <input type="email" placeholder="Email address"></input>
          <input type="phone" placeholder="Phone number"></input>
        </div>
      </main>

      <Link href="/apply">
        <a className={styles.card}>Complete Application</a>
      </Link>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
