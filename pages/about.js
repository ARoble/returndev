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
      <div className="container mx-auto">
        Return dev is Somaliland’s very first coding bootcamp in Hargeisa that
        aims to graduate thousands of skilled Software engineers in Somaliland.
        We offer students high quality training, from experienced local and
        international instructors. Return-dev ensures that each student that
        goes through our training, is not only technically equipped but also has
        all the soft skills needed to work in high-demanding environments by
        imitating real work stimuli on our programmes. The bootcamp was created
        by a team of educated diaspora based in the UK with the hope of boosting
        opportunities for young Somali’s through increasing their IT/coding
        literacy. We strongly believe that in a limited prospect country such as
        Somaliland empowering young people to learn coding will significantly
        improve chances of success in their lives. The bootcamp will not only be
        offering strict technical education but also teach professionalism and
        employability skills through the several mentors and industry experts we
        have on board. We are currently in the midst of also creating key
        relationships with Somaliland’s leading firms in aim of placing each of
        our graduates in the IT market, either locally or nationally, this will
        ensure that knowledge gained on our programme serves to benefit the
        local and national economy. The world is evolving and some of the most
        disruptive ideas are based around technology. Return Dev will seek to
        produce, cultivate, and develop the next line of innovators in
        Somaliland and all of East Africa.
      </div>
    </div>
  );
};

export default about;
