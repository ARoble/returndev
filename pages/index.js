import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Mentor from "../components/Mentor";
import mentors from "../data/mentors.json";

const navigation = [
  { name: "Who this course is for?", href: "#who-course" },
  { name: "Overview", href: "#overview" },
];

export default function Home() {
  return (
    <div className="h-screen ">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Return Dev Bootcamp</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Popover>
              {({ open }) => (
                <>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-between"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <a href="#">
                            <span className="sr-only">Return dev Logo</span>
                            <img
                              className="h-8 w-auto sm:h-10"
                              src="/returndev_logo.png"
                            />
                          </a>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-lightgreen">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="/returndev_logo.png"
                              alt=""
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-lightgreen">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Learn to code in</span>{" "}
                  <span className="block text-brand-green xl:inline">
                    16 weeks
                  </span>
                </h1>
                <p className="my-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Equip yourself with the skills of a full-stack web developer
                  through our dynamic classes, expert instruction, and a
                  cutting-edge curriculum. in 16 weeks you'll be able to code
                  your own web applications from scratch and kickstart your new
                  career in tech.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfE0p7arSl69yBJqR3MmndftyT72teZ9LPEqpi5b9RZhhHwzw/viewform"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green hover:bg-brand-darkgreen md:py-4 md:text-lg md:px-10"
                    >
                      Apply now
                    </a>
                  </div>
                  <div className="hidden sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-brand-green bg-brand-lightgreen hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/images/hero_image.jpg"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <div id="who-course" className="container mx-auto my-32">
        <div className="bg-green-100 p-5 md:p-16 text-center rounded-3xl">
          <h4 className="font-black text-2xl mb-4">Who this course is for?</h4>
          <p>
            This course has no pre-requisites! It's designed for anyone who
            wants to get started or get better at coding. Whether you're
            thinking of changing careers, growing you're knowledge or learning
            exciting new skills to execute the next big idea it's all a matter
            of just 16 weeks away.
          </p>
        </div>
      </div>

      <div
        id="overview"
        className="container mx-auto my-32 grid grid-cols-1 md:grid-cols-2 gap-11"
      >
        <div className="bg-green-100  p-5 md:p-16 text-center rounded-3xl">
          <h4 className="font-black text-2xl mb-4 text-left">Pre bootcamp</h4>
          <p className=" mb-2 text-left uppercase text-sm">Topics:</p>
          <ul className="text-left text-base">
            <li className="thunderbolt">HTML &amp; CSS</li>
            <li className="thunderbolt">JavaScript Fundamentals Part I</li>
            <li className="thunderbolt">
              JavaScript Fundamentals Part II &amp; DOM Manipulation
            </li>
            <li className="thunderbolt">Github</li>
          </ul>
        </div>
        <div className="bg-green-100  p-5 md:p-16 text-center rounded-3xl">
          <h4 className="font-black text-2xl mb-4 text-left">Bootcamp</h4>
          <p className=" mb-2 text-left uppercase text-sm">Topics:</p>
          <ul className="text-left text-base">
            <li className="thunderbolt">Introduction to Node.js, NPM</li>
            <li className="thunderbolt">
              Asynchronous javascript and RESTful API
            </li>
            <li className="thunderbolt">
              Authentication, Authorization &amp; Security
            </li>
            <li className="thunderbolt">
              Database Design and data modeling with MySQL
            </li>
            <li className="thunderbolt">Client-side rendering with React</li>
            <li className="thunderbolt">
              Project management &amp; Communication / Team work
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto my-32">
        <h2 className="heading">Tech stack we teach</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 my-5 gap-5 md:gap-3">
          <img width={96} height={96} src="/images/git-original-wordmark.svg" />
          <img
            width={96}
            height={96}
            src="/images/nodejs-original-wordmark.svg"
          />
          <img
            width={96}
            layout="responsive"
            height={40}
            src="/images/html5-plain.svg"
          />
          <img
            width={96}
            layout="responsive"
            height={60}
            src="/images/css3-plain.svg"
          />
          <img
            width={96}
            height={96}
            src="/images/react-original-wordmark.svg"
          />
          <img
            width={96}
            height={96}
            src="/images/mysql-original-wordmark.svg"
          />
          <img
            className="h-16 w-16"
            width={96}
            height={96}
            src="/images/javascript-original.svg"
          />
        </div>
      </div>
      <div className="container mx-auto my-32">
        <h2 className="heading">About us</h2>
        <p className="my-3">
          <span className="text-brand-green font-bold">Return dev</span> is
          Somaliland’s very first coding bootcamp in Hargeisa that aims to
          graduate thousands of skilled Software engineers in Somaliland. We
          offer students high quality training, from experienced local and
          international instructors.{" "}
          <span className="text-brand-green font-bold">Return dev</span> ensures
          that each student that goes through our training, is not only
          technically equipped but also has all the soft skills needed to work
          in high-demanding environments by imitating real work stimuli on our
          programmes.
        </p>
        <p className="my-3">
          The bootcamp was created by a team of educated diaspora based in the
          UK with the hope of boosting opportunities for young Somali’s through
          increasing their IT/coding literacy. We strongly believe that in a
          limited prospect country such as Somaliland empowering young people to
          learn coding will significantly improve chances of success in their
          lives.
        </p>
        <p className="my-3">
          The bootcamp will not only be offering strict technical education but
          also teach professionalism and employability skills through the
          several mentors and industry experts we have on board. We are
          currently in the midst of also creating key relationships with
          Somaliland’s leading firms in aim of placing each of our graduates in
          the IT market, either locally or nationally, this will ensure that
          knowledge gained on our programme serves to benefit the local and
          national economy.
        </p>
        <p className="my-3">
          The world is evolving and some of the most disruptive ideas are based
          around technology.{" "}
          <span className="text-brand-green font-bold">Return dev</span> will
          seek to produce, cultivate, and develop the next line of innovators in
          Somaliland and all of East Africa.
        </p>
      </div>
      <div className="hidden container mx-auto my-32">
        <h2 className="heading">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 my-4">
          {mentors.map(({ name, bio, imageUrl, location, role }, index) => {
            return (
              <Mentor
                key={index}
                name={name}
                role={role}
                bio={bio}
                imageUrl={imageUrl}
                location={location}
              />
            );
          })}
        </div>
      </div>
      <footer className="bg-brand-green py-14">
        <img src="/returndev_logo_white.png" className="w-24 mx-auto" />
      </footer>
    </div>
  );
}
