import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "@/utils/animation"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Sunil Swain - AI Scientist",
  description:
    "Generative AI and Large Language Model projects built by Sunil Swain",
})

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            Work <br />
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="mb-20 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              Experience.
            </span>
          </motion.span>
        </h1>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="space-y-2 text-neutral-800 dark:text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <p className="font-medium">ESSPL - Associate AI/ML Developer</p>
            <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
            <p>2023, June - Now</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Sambad Digital - Technical Intern</p>
            <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
            <p>2023 March - 2023 June</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default WorkPage
