import * as React from "react"

import { type Metadata } from "next"

import { ArrowUpRight } from "akar-icons"
import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "utils/animation"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/projects/",
  title: "Products & Projects | Sunil Swain",
  description:
    "Shipped products, web apps, and open-source work by Sunil Swain.",
})

/** Thumbnail service returns a rendered snapshot of the page (may cache briefly on first load). */
function sitePreviewUrl(pageUrl: string): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(pageUrl)}?w=1200`
}

const webProducts = [
  {
    title: "Eziterms Dashboard",
    href: "https://haptix.in/eziterms-dashboard",
    description:
      "Dashboard experience for Eziterms on Haptix—terms, workflows, and operational views in one place.",
  },
  {
    title: "Ezi Learning",
    href: "https://ezilearning.haptix.in/",
    description:
      "Learning product on the Haptix stack—structured content delivery and learner-facing flows.",
  },
] as const

const githubProjects = [
  {
    title: "Malix",
    href: "https://github.com/sunilswain/Malix",
    description:
      "Python API for generating disposable emails—documented, published on PyPI as malix-swain.",
    previewSrc:
      "https://opengraph.githubassets.com/1/sunilswain/Malix",
  },
] as const

const ProjectsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen justify-center py-24">
      <div className="mx-auto w-full max-w-[980px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="mt-8 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            Products
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="mb-10 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              & Projects.
            </span>
          </motion.span>
        </h1>

        <motion.section
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.15, ...BASE_TRANSITION }}
          className="mb-14"
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
            Web products
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {webProducts.map((item, index) => (
              <motion.article
                key={item.href}
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 + 0.08 * index,
                  ...BASE_TRANSITION,
                }}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sitePreviewUrl(item.href)}
                      alt=""
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="border-t border-neutral-100 p-4 dark:border-neutral-800">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {item.title}
                    </h3>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                      aria-label={`Open ${item.title} in a new tab`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-500">
                    Preview is a generated snapshot and may update on a short
                    delay the first time you open this page.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.25, ...BASE_TRANSITION }}
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
            Open source
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {githubProjects.map((item, index) => (
              <motion.article
                key={item.href}
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + 0.08 * index,
                  ...BASE_TRANSITION,
                }}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.previewSrc}
                      alt=""
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="border-t border-neutral-100 p-4 dark:border-neutral-800">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {item.title}
                    </h3>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                      aria-label={`Open ${item.title} on GitHub`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}

export default ProjectsPage
