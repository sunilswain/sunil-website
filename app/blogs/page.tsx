import * as React from "react"

import { type Metadata } from "next"

import { ArrowRight } from "akar-icons"
import * as motion from "framer-motion/client"
import Link from "next/link"

import ComingSoon from "components/molecules/ComingSoon"
import { BASE_TRANSITION } from "utils/animation"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Sunil Swain - AI Scientist",
  description: "Blogs and articles on AI and tech written by Sunil Swain",
})

const blogs = [
  {
    slug: "self-attention",
    title: "Mastering Self-Attention: Queries, Keys, and Values in Action",
  },
]

const BlogsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {blogs.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
          <h1>
            <motion.span
              initial={{ translateY: 10, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
            >
              Blogs <br />
            </motion.span>
            <motion.span
              initial={{ translateY: 10, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0.1, ...BASE_TRANSITION }}
              className="mb-20 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
            >
              <span className="text-neutral-400 dark:text-neutral-600">
                & Articles.
              </span>
            </motion.span>
          </h1>
          <div className="space-y-2 text-neutral-800 dark:text-neutral-400">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 + 0.1 * (index + 1),
                  ...BASE_TRANSITION,
                }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group flex items-center justify-between gap-2"
                >
                  <p className="font-medium">{blog.title}</p>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default BlogsPage
