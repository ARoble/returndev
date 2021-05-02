import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen bg-brand-green">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Return Dev Bootcamp</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        />
      </Head>

      <header className="h-1/6">
        <div className="m-10 float-right">
          <a href="https://forms.gle/B67N1orb6EG68qzs5" target="_blank">
            <button type="button" className={styles.btn_primary}>
              Intrested
            </button>
          </a>
        </div>
      </header>

      {/* <!-- START The header section of this--> */}
      <div className="flex justify-center flex-col items-center h-4/6">
        <div className={styles.block_logo}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
        </div>
        <h1 className={styles.coming_soon}>Coming soon!</h1>
        <div className={styles.block_message}>
          The website is still under construction 👷🏾‍♂️🚧. <br />
          Please bare with us 😇
        </div>
      </div>
      {/* <!-- END The header section of this--> */}

      <div className={styles.socials_block}>
        <div className={styles.socials_links}>
          <a href="https://twitter.com/return_dev">
            <img src="/twitter.png" />
          </a>
          <a href="https://www.instagram.com/returndevbootcamp">
            <img src="/instagram.png" />
          </a>
          <a href="https://www.facebook.com/returnDevBootcamp">
            <img src="/facebook.png" />
          </a>
        </div>
        <div>
          <center>Made with 💗 by return dev</center>
        </div>
      </div>
    </div>
  );
}
