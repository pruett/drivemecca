import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Apply.module.css";

export default function Apply() {
  const sheetsMacroUrl =
    "https://script.google.com/macros/s/AKfycbwsXjDHl1fhgCYYR_qDPwa3iPiHqrKlQAOiaPhd2bclvL0YEJs/exec";
  const { query } = useRouter();

  useEffect(() => {
    if (Object.entries(query).length === 0) return;

    fetch(`${sheetsMacroUrl}${window.location.search}`);
  }, [query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {query.name}, thanks for applying to drive for Mecca Trucking!
        </title>
        <script src="./event.js" />
      </Head>

      <main className={styles.main}>
        <img
          src="/logo.png"
          alt="Mecca and Sons Trucking Logo"
          className={styles.logo}
        />
        <h1>Thanks for your interest, {query.name}!</h1>
        <div>
          <p>
            We'll let you know when our online application is ready! If you are
            eager to start the process now, feel free to download the .pdf below
          </p>
        </div>

        <a
          className={styles.downloadPdf}
          href="/MeccaDriverApplication.pdf"
          target="_blank"
          download
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.14 482.14">
            <path
              className={styles.pdfFillLetter}
              d="M142.024 310.194c0-8.007-5.556-12.782-15.359-12.782-4.003 0-6.714.395-8.132.773v25.69c1.679.378 3.743.504 6.588.504 10.449 0 16.903-5.279 16.903-14.185zM202.709 297.681c-4.39 0-7.227.379-8.905.772v56.896c1.679.394 4.39.394 6.841.394 17.809.126 29.424-9.677 29.424-30.449.126-18.063-10.458-27.613-27.36-27.613z"
            />
            <path
              className={styles.pdfFillIcon}
              d="M315.458 0H121.811c-28.29 0-51.315 23.041-51.315 51.315v189.754h-5.012c-11.418 0-20.678 9.251-20.678 20.679v125.404c0 11.427 9.259 20.677 20.678 20.677h5.012v22.995c0 28.305 23.025 51.315 51.315 51.315h264.223c28.272 0 51.3-23.011 51.3-51.315V121.449L315.458 0zM99.053 284.379c6.06-1.024 14.578-1.796 26.579-1.796 12.128 0 20.772 2.315 26.58 6.965 5.548 4.382 9.292 11.615 9.292 20.127 0 8.51-2.837 15.745-7.999 20.646-6.714 6.32-16.643 9.157-28.258 9.157-2.585 0-4.902-.128-6.714-.379v31.096h-19.48v-85.816zm286.981 166.334H121.811c-10.954 0-19.874-8.92-19.874-19.889v-22.995h246.31c11.42 0 20.679-9.25 20.679-20.677V261.748c0-11.428-9.259-20.679-20.679-20.679h-246.31V51.315c0-10.938 8.921-19.858 19.874-19.858l181.89-.19V98.5c0 19.638 15.934 35.587 35.587 35.587l65.862-.189.741 296.925c0 10.97-8.904 19.89-19.857 19.89zm-211.969-80.912v-85.422c7.225-1.15 16.642-1.796 26.58-1.796 16.516 0 27.226 2.963 35.618 9.282 9.031 6.714 14.704 17.416 14.704 32.781 0 16.643-6.06 28.133-14.453 35.224-9.157 7.612-23.096 11.222-40.125 11.222-10.198 0-17.423-.646-22.324-1.291zm140.827-50.575v15.996h-31.23v34.973h-19.74v-86.966h53.16v16.122h-33.42v19.875h31.23z"
            />
          </svg>
          Download application
        </a>
      </main>
    </div>
  );
}
