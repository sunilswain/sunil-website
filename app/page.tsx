import * as React from "react"

import { type Metadata } from "next"

import { LinkedinFill, MediumFill, Envelope, GithubFill } from "akar-icons"
import * as motion from "framer-motion/client"
import Link from "next/link"

import { BASE_TRANSITION } from "utils/animation"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Sunil Swain - AI/ML Engineer",
  description:
    "Personal website of Sunil Swain, an AI/ML engineer focused on Gen AI, LLMs, and voice systems.",
})

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="flex text-4xl font-semibold leading-snug tracking-tight text-neutral-800 md:text-5xl md:leading-snug dark:text-neutral-300"
          >
            Hello, I{"'"}m
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="mb-7 flex text-4xl font-semibold leading-snug tracking-tight text-neutral-800 md:text-5xl md:leading-snug dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              Sunil Swain.
            </span>
          </motion.span>
        </h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="mb-20 text-sm text-neutral-600 md:text-base dark:text-neutral-500"
        >
          I{"'"}m{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            AVP, Artificial Intelligence
          </span>{" "}
          at{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Wells Fargo
          </span>
          , on the central AI team. I specialize in large language models,
          generative AI, voice systems, and shipping production AI that teams
          can rely on.
        </motion.p>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <a
            href="https://www.linkedin.com/in/sunil-swain/"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <LinkedinFill size={15} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://medium.com/@sunilswain5555"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <MediumFill size={15} />
            <span className="text-sm">Medium</span>
          </a>
          <a
            href="https://github.com/sunilswain/"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <GithubFill size={15} />
            <span className="text-sm">Github</span>
          </a>
          <a
            href="mailto:sunilswain5555@pm.me"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <Envelope size={15} />
            <span className="text-sm">Email</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.4, ...BASE_TRANSITION }}
          className="mt-12 text-center text-xs text-neutral-400 dark:text-neutral-600"
        >
          <Link
            href="/privacy-policy/"
            className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-400 underline underline-offset-4"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default HomePage
