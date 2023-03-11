import Head from "next/head";

import Image from "next/image";
import twitterIcon from "@/public/twitter.png";
import githubIcon from "@/public/github.png";
import emailIcon from "@/public/email.png";
import { useState, useEffect } from "react";

function Name() {
  return (
    <>
      <div className="text-center font-black">
        <div className="text-7xl sm:text-9xl md:text-9xl lg:text-9xl">
          <p className="bg-gradient-to-tr from-cyan-500 to-cyan-100 bg-clip-text transition duration-300 ease-in-out hover:-translate-y-1 hover:text-transparent">
            JAMES
          </p>
          <p className="bg-gradient-to-br from-amber-500 to-amber-300 bg-clip-text transition duration-300 ease-in-out hover:-translate-y-1 hover:text-transparent">
            WHITNEY
          </p>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="text-center text-xs sm:text-lg">
        <ul className="">
          <li className="py-1">
            Infrastructure Lead and Backend Software Engineer at{" "}
            <a className="underline decoration-red-500" href="https://www.callin.com/">
              Callin.com
            </a>
          </li>
          <li className="py-1">
            Previously at AWS: DevOps for{" "}
            <a className="underline decoration-orange-500" href="https://aws.amazon.com/s3/">
              S3
            </a>
            ,{" "}
            <a className="underline decoration-orange-500" href="https://aws.amazon.com/serverless/">
              Serverless
            </a>
            ,{" "}
            <a
              className="underline decoration-orange-500"
              href="https://aws.amazon.com/federal/us-intelligence-community/"
            >
              AWS Intelligence
            </a>
            , and{" "}
            <a className="underline decoration-cyan-700" href="https://www.linkedin.com/company/annapurna-labs/">
              Annapurna Labs
            </a>
          </li>
          <li className="py-1">
            Graduated from Cal Poly in 2018 with a bachelors in{" "}
            <a className="underline decoration-green-700" href="https://www.calpoly.edu/major/computer-engineering">
              Computer Engineering
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

function Socials() {
  return (
    <>
      <div className="flex justify-center py-3">
        <a className="px-6 duration-200 ease-in-out hover:-translate-y-1" href="https://twitter.com/0xJamesWhitney">
          <Image className="invert" src={twitterIcon} alt="Twitter Icon" width={45} />
        </a>
        <a className="px-6 duration-200 ease-in-out hover:-translate-y-1" href="https://github.com/James-Whitney">
          <Image className="invert" src={githubIcon} alt="Github Icon" width={45} />
        </a>
        <a className="px-6 duration-200 ease-in-out hover:-translate-y-1" href="mailto:contact@JasWhitney.com">
          <Image className="invert" src={emailIcon} alt="Email Icon" width={45} />
        </a>
      </div>
    </>
  );
}

function Spinners() {
  // fun rotating text, but not sure if I want to keep it
  return (
    <>
      <div className="mx-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <div className="flex place-content-center border border-gray-800 font-black sm:place-content-start">
          <p>I am a</p>
          <div className="h-8 overflow-hidden sm:h-10 md:h-12 lg:h-16">
            <ul className="animate-scroll-text-5">
              <li className="bg-gradient-to-tr from-blue-400 to-fuchsia-700 bg-clip-text pb-8 pl-3 text-transparent">
                developer
              </li>
              <li className="bg-gradient-to-bl from-orange-500 to-red-500 bg-clip-text pb-8 pl-3 text-transparent">
                builder
              </li>
              <li className="bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text pb-8 pl-3 text-transparent">
                leader
              </li>
              <li className="pb-8">
                n{" "}
                <span className="bg-gradient-to-bl from-green-500 to-lime-500 bg-clip-text text-transparent">
                  educator
                </span>
              </li>
              <li className="bg-gradient-to-tr from-blue-400 to-fuchsia-700 bg-clip-text pb-8 pl-3 text-transparent">
                developer
              </li>
            </ul>
          </div>
        </div>
        <div className="flex place-content-center border border-gray-800 font-black sm:place-content-start">
          <p>who loves to</p>
          <div className="h-8 overflow-hidden sm:h-10 md:h-12 lg:h-16">
            <ul className="animate-scroll-text-3">
              <li className="bg-gradient-to-bl from-amber-400 to-amber-700 bg-clip-text pb-8 pl-3 text-transparent">
                optimize
              </li>
              <li className="bg-gradient-to-tr from-red-600 to-rose-500 bg-clip-text pb-8 pl-3 text-transparent">
                accelerate
              </li>
              <li className="bg-gradient-to-r from-cyan-400 to-sky-700 bg-clip-text pb-8 pl-3 text-transparent">ski</li>
              <li className="bg-gradient-to-bl from-amber-400 to-amber-700 bg-clip-text pb-8 pl-3 text-transparent">
                optimize
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function DetectIsFocused() {
  // Shamelessly stolen from stackoverflow, flips the state of the page when
  // focus is lost or regained
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    const handleActivityFalse = () => {
      setIsFocused(false);
    };

    const handleActivityTrue = () => {
      setIsFocused(true);
    };

    window.addEventListener("focus", handleActivityTrue);
    window.addEventListener("blur", handleActivityFalse);

    return () => {
      window.removeEventListener("focus", handleActivityTrue);
      window.removeEventListener("blur", handleActivityFalse);
    };
  }, [isFocused]);
  return isFocused;
}

export default function Home() {
  const isFocused = DetectIsFocused();
  const linkUrl = isFocused ? "/avatar_3_round.png" : "/avatar_3_round_upside.png";

  return (
    <>
      <Head>
        <title>James Whitney</title>
        <meta name="description" content="James Whitney's personal website" />
        <link rel="icon" href={linkUrl} />
      </Head>

      <div className="absolute inset-0">
        <div className="container mx-auto flex h-full max-w-screen-sm flex-col place-content-center md:max-w-screen-md lg:max-w-screen-lg">
          <Name />
          <div className="py-8">
            <About />
          </div>
          <Socials />
        </div>
      </div>
    </>
  );
}
