import Head from "next/head";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <Link href="/">
        <a>Yes this is the about G</a>
      </Link>
    </div>
  );
};

export default about;
