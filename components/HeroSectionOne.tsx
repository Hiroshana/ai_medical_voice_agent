"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSectionOne() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Your Personal AI Doctor, On Demand"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Get instant medical advice, medication recommendations, and clear
          instructions from specialized AI voice agents.{" "}
          <span className="font-bold text-lg">PulseAI</span> gives you trusted
          guidance anytime, anywhere.
        </motion.p>

        <Link href={"/sign-in"}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {/* <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Explore Now
            </button> */}
            <button className="w-60 transform bg-gradient-to-r from-brand-red-3 to-brand-red-1 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100">
              Explore Now
            </button>
            {/* <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contact Support
            </button> */}
            <button className="w-60 transform rounded-lg border border-brand-red-3 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contact Support
            </button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800 sticky">
      <div className="flex items-center gap-2">
        <Image
          src={"/Logo-pluseAI.png"}
          width={"200"}
          height={"120"}
          alt="Pluse AI"
        />
        {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Pulse AI</h1> */}
      </div>
      {!user ? (
        // <Link href={"/sign-in"}>
        //   <button className="w-24 transform rounded-sm bg-purple-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        //     Login
        //   </button>
        // </Link>
        <Link href={"/sign-in"}>
          <button className="bg-gradient-to-r from-brand-red-3 to-brand-red-1 text-white font-bold py-1 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex gap-5 items-center">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      )}
    </nav>
  );
};
